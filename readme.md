# StackOverflow helper for question 67752658

Original question can be found on [StackOverflow](https://stackoverflow.com/q/67752658/28004)

***

to run 

- add WaniKani [`API_TOKEN`](https://www.wanikani.com/settings/personal_access_tokens/new) in `.env` file
- `npm i`
- `node index.js` or `npm start`

***

result

```bash
> npm start

> so67752658@1.0.0 start E:\_temp\so67752658
> node index.js

getWkItems https://api.wanikani.com/v2/review_statistics
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=115383124
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=123006279
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=132186315
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=139291362
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=148858068
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=158906608
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=173188879
getWkItems https://api.wanikani.com/v2/review_statistics?page_after_id=211922458
getWkItems: review_statistics 4235
getWkItems https://api.wanikani.com/v2/subjects
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=1000
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=2000
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=3001
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=4002
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=5002
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=6002
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=7002
getWkItems https://api.wanikani.com/v2/subjects?page_after_id=8003
getWkItems: subjects 8948
reviewStats 4235
subjects 8948
sorted
joined
allData has 4235 entries
first entry is [
  4618,
  {
    updated_at: '2021-05-29T15:33:01.755588Z',
    created_at: '2020-08-28T23:50:54.223723Z',
    subject_id: 4618,
    subject_type: 'vocabulary',
    meaning_correct: 109,
    meaning_incorrect: 70,
    meaning_max_streak: 9,
    meaning_current_streak: 3,
    reading_correct: 109,
    reading_incorrect: 39,
    reading_max_streak: 15,
    reading_current_streak: 11,
    percentage_correct: 67,
    hidden: false,
    subject: {
      updated_at: '2021-04-26T21:32:06.446927Z',
      slug: '裁判',
      meanings: [Array],
      characters: '裁判',
      readings: [Array],
      level: 23
    }
  }
]
```