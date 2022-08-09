const express = require('express')
const serverless = require('serverless-http');
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express()
const port = 4000
const AWS = require('aws-sdk');

// parse application/json
app.use(bodyParser.json())

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
app.get('/loadNewUser', (req, res) => {
    var user = {
        username: "keith",
        cardNumber: "5382594806791392",
        roundingValue: 5,
        mainInvestment: "SPY",
        investments: {
            "SPY": 3.50,
            "ESG": 2.00,
            "cash": 0.00
        },
        contributionHistory: [
            ["2022-08-01", 3.50, "SPY"],
            ["2022-08-02", 2.00, "ESG"]
        ],
        dailyPortfolioValue: [
            { "2022-08-01": 5.50 },
            { "2022-08-01": 5.50 },
            { "2022-08-01": 5.50 }
        ]
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
            res.send(data.Item);
        }
    });
});

// ADD CONTRIBUTION
// --------------------------------------------
app.post('/addContribution', (req, res) => {
    var userName = req.body.userName;
    var amount = req.body.amount;
    var updatedInvestmentTotal = 0;

    // first, get user details
    params = {};
    params.TableName = "CitiUsers";
    params.Key = { username: userName };
    dynamoDB.get(params, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            var userDetails = data.Item;
            var updateObj = {
                TableName: "CitiUsers",
                Key: {
                    "username": userName
                }
            };

            // then, add amount to the mainInvestment
            // if user has set a main investment, add to the total amount of that investment
            if (userDetails.mainInvestment != "") {
                updatedInvestmentTotal = parseFloat(userDetails.investments[userDetails.mainInvestment]) + parseFloat(amount);
                updateObj["UpdateExpression"] = `set investments.${userDetails.mainInvestment} = :updatedInvestment, `;
                updateObj["ExpressionAttributeValues"] = { ":updatedInvestment": updatedInvestmentTotal };
            }
            // else park it under cash 
            else {
                updatedInvestmentTotal = parseFloat(userDetails.investments["cash"]) + parseFloat(amount);
                updateObj["UpdateExpression"] = `set investments.cash = :updatedInvestment,`;
                updateObj["ExpressionAttributeValues"] = { ":updatedInvestment": updatedInvestmentTotal };
            }

            // lastly, add a new record to contribution history
            // add new element to contribution history array
            var today = new Date();
            var dateTime = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();
            if (userDetails.mainInvestment != ""){
                investmentName = userDetails.mainInvestment;
            } else {
                investmentName = "cash";
            }
            var addToContributionHistory = [dateTime, parseFloat(amount), investmentName];
            
            updateObj["UpdateExpression"] += `contributionHistory = list_append(contributionHistory, :newContribution)`;
            updateObj["ExpressionAttributeValues"][":newContribution"] = [addToContributionHistory];

            dynamoDB.update(updateObj, function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({
                        "status": 200,
                        "result": "contribution updated successfully"
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