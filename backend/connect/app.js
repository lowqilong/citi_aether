const express = require('express')
const serverless = require('serverless-http');
const app = express()
const port = 4000
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.get('/connect', (req, res) => {
    // var obj = {'username' : 'keith', 'password' : 'keithpw'};
    var obj = {
        TableName: "CitiUsers",
        Item: {'username' : 'keith', 'password' : 'keithpw'}
    };
    dynamoDB.put(obj);
    res.send('Connect' + JSON.stringify(obj));
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

module.exports.handler = serverless(app);