const express = require('express')
const serverless = require('serverless-http');
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Connect')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.handler = serverless(app);