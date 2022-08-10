const express = require('express')
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express()
const port = 4000
const AWS = require('aws-sdk');

// parse application/json
app.use(bodyParser.json())

// enable cors
app.use(cors())

let awsConfig = {
    'region': "ap-southeast-1",
    'endpoint': 'http://dynamodb.ap-southeast-1.amazonaws.com',
    'accessKeyId': process.env.accessKeyId,
    'secretAccessKey': process.env.secretAccessKey
};
AWS.config.update(awsConfig);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

// ADD NEW USER
// --------------------------------------------
app.post('/loadNewUser', (req, res) => {
    var user = {
        username: req.body.username,
        cardNumber: req.body.cardNumber,
        roundingValue: req.body.roundingValue,
        mainInvestment: req.body.mainInvestment,
        investments: req.body.investments,
        transactionHistory: req.body.transactionHistory,
        dailyPortfolioValue: req.body.dailyPortfolioValue,

    };
    var obj = {
        TableName: "CitiUsers",
        Item: user
    };
    dynamoDB.put(obj, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(user));
        }
    });

});

// GET USER DETAILS
// --------------------------------------------
app.post('/getUserDetails', (req, res) => {
    params = {};
    params.TableName = "CitiUsers";
    params.Key = { username: req.body.username };
    dynamoDB.get(params, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            // const response = {
            //     statusCode: 200,
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Credentials': true,
            //     },
            //     body: JSON
            // }
            res.send(data.Item);
        }
    });
});

// CHANGE USER ROUNDING VALUE
// --------------------------------------------
app.post('/changeRoundingValue', (req, res) => {
    var newRoundingValue = req.body.newRoundingValue;
    var updateObj = {
        TableName: "CitiUsers",
        Key: {
            "username": req.body.username
        }
    };
    updateObj["UpdateExpression"] = `set roundingValue = :newRoundingValue`;
    updateObj["ExpressionAttributeValues"] = { ":newRoundingValue": newRoundingValue };

    dynamoDB.update(updateObj, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                "status": 200,
                "result": "rounding value updated successfully"
            });
        }
    });
});

// CHANGE MAIN INVESTMENT
// --------------------------------------------
app.post('/changeMainInvestment', (req, res) => {
    var newMainInvestmentName = req.body.newMainInvestment;
    var updateObj = {
        TableName: "CitiUsers",
        Key: {
            "username": req.body.username
        }
    };
    updateObj["UpdateExpression"] = `set mainInvestment = :newMainInvestmentName`;
    updateObj["ExpressionAttributeValues"] = { ":newMainInvestmentName": newMainInvestmentName };
    dynamoDB.update(updateObj, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                "status": 200,
                "result": "main investment updated successfully"
            });
        }
    });
});

// ADD TRANSACTION
// --------------------------------------------
app.post('/addTransaction', (req, res) => {
    var userName = req.body.username;
    var description = req.body.description;
    var transactionAmount = req.body.transactionAmount

    params = {};
    params.TableName = "CitiUsers";
    params.Key = { username: userName };
    dynamoDB.get(params, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            // first, get user details
            var userDetails = data.Item;
            var mainInvestmentName = userDetails.mainInvestment;
            if (mainInvestmentName == "") {
                mainInvestmentName = 'cash';
            }
            var updateObj = {
                TableName: "CitiUsers",
                Key: {
                    "username": userName
                }
            };

            // then, get roundingValue and calculate contribution
            var roundingValue = parseFloat(userDetails.roundingValue);
            var contribution = roundingValue - (parseFloat(transactionAmount) % roundingValue);

            // then, get total contribution of mainInvestment
            var newMainInvestmentTotal = parseFloat(userDetails.investments[mainInvestmentName]) + contribution;

            // then, add amount to the mainInvestment
            updateObj["UpdateExpression"] = `set investments.${mainInvestmentName} = :newMainInvestmentTotal, `;
            updateObj["ExpressionAttributeValues"] = { ":newMainInvestmentTotal": newMainInvestmentTotal };

            // lastly, add a new record to contribution history (date, contribution, investment, tran amount, desc)
            // add new element to contribution history array
            var today = new Date();
            var dateTime = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();
            var addToTransactionHistory = [dateTime, contribution, mainInvestmentName, transactionAmount, description];

            updateObj["UpdateExpression"] += `transactionHistory = list_append(transactionHistory, :newTransaction)`;
            updateObj["ExpressionAttributeValues"][":newTransaction"] = [addToTransactionHistory];

            dynamoDB.update(updateObj, function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({
                        "status": 200,
                        "result": "transaction updated successfully"
                    });
                }
            });
        }
    });
});

if (process.env.NODE_ENV) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports.handler = serverless(app);

// add num of shares in each portfolio
// addtransaction: add description and transaction amount fields, process the total contribution

// var user = {
//     username: "keith",
//     cardNumber: "5382594806791392",
//     roundingValue: 5,
//     mainInvestment: "SPY",
//     investments: {
//         "SPY": 3.50,
//         "ESG": 2.00,
//         "cash": 0.00
//     },
//     transactionHistory: [
//         ["2022-08-01", 3.50, "SPY", <transactionAmount>, <description>],
//         ["2022-08-02", 2.00, "ESG"]
//     ],
//     dailyPortfolioValue: [
//         { "2022-08-01": 5.50 },
//         { "2022-08-01": 5.50 },
//         { "2022-08-01": 5.50 }
//     ]
// };