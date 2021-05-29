require('dotenv').config();

const axios = require('axios');
const API_TOKEN = process.env.API_TOKEN;

const log = (...args) => console.log(...args);

const getWkItems = async (endpoint = 'review_statistics') => {
    const results = [];
    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${API_TOKEN}` },
    };

    let nextUrl = `https://api.wanikani.com/v2/${endpoint}`;
    while (nextUrl) {
        log('getWkItems', nextUrl);
        const response = await axios(nextUrl, options);
        nextUrl = null;
        if (response.data) {
            const body = response.data;
            nextUrl = body.pages.next_url;
            results.push(...body.data);
        } else {
            nextUrl = null;
        }
    }
    return results;
};


const joinData = async () => {
    const reviewStats = new Map();
    let data = await getWkItems('review_statistics');
    if (data) {
        log('getWkItems: review_statistics', data.length);
        data.forEach((d) => {
            reviewStats.set(d.data.subject_id, {
                updated_at: d.data_updated_at,
                ...d.data,
            });
        });
    }

    const subjects = new Map();
    data = await getWkItems('subjects');
    if(data) {
        log('getWkItems: subjects', data.length);
        data.forEach((d) => {
            subjects.set(d.id, {
                updated_at: d.data_updated_at,
                slug: d.data.slug,
                meanings: d.data.meanings,
                characters: d.data.characters,
                readings: d.data.readings,
                level: d.data.level,
            });
        });
    }
    log('reviewStats', reviewStats.size);
    log('subjects', subjects.size);

    let sortedReviewStats = new Map(
        Array.from(reviewStats.entries()).sort(
            (e1, e2) => Date.parse(e2[1].updated_at) - Date.parse(e1[1].updated_at)
        )
    );
    log('sorted');

    const joinedData = new Map();
    sortedReviewStats.forEach((d, id) => {
        joinedData.set(id, { ...d, subject: subjects.get(id) }); //this looks up subject by its id
    });
    log('joined');

    return joinedData;
};

(async () => {
    const allData = await joinData();
    log('allData has', allData.size, 'entries');
    log('first entry is', allData.entries().next().value);
})();
