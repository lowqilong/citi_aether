const express = require('express')
const serverless = require('serverless-http');
const app = express()
const port = 4000
const AWS = require('aws-sdk');

let awsConfig = {
    'region': "ap-southeast-1",
    'endpoint': 'http://dynamodb.ap-southeast-1.amazonaws.com',
    'accessKeyId': '',
    'secretAccessKey': '+1c'
};
AWS.config.update(awsConfig);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.get('/connect/:username/:password', (req, res) => {
    // var obj = {'username' : 'keith', 'password' : 'keithpw'};
    var obj = {
        TableName: "CitiUsers",
        Item: {'username': req.params.username, 'password': req.params.password}
    };
    dynamoDB.put(obj, function(err, data){
        if (err){
            console.log("problem");
        }else {
            console.log("success");
        }
    });
    res.send('Connect' + JSON.stringify(obj));
})

if (process.env.NODE_ENV) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports.handler = serverless(app);