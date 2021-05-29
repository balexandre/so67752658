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
getWkItems: review_statistics 0
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
reviewStats 0
subjects 8948
sorted
joined
Map(0) {}
```