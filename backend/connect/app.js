const express = require('express')
const serverless = require('serverless-http');
const app = express()
const port = 4000
const AWS = require('aws-sdk');

let awsConfig = {
'region': "ap-southeast-1",
'endpoint': 'http://dynamodb.ap-southeast-1.amazonaws.com',
'accessKeyId': 'AKIAZWYFESO5MZQNZRV3',
'secretAccessKey': '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'
};
AWS.config.update(awsConfig);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

// app.get('/connect/:username/:password', (req, res) => {
// var obj = {
//     TableName: "CitiUsers",
//     Item: {'username': req.params.username, 'password': req.params.password}
// };
// dynamoDB.put(obj, function(err, data){
//     if (err){
//         console.log("problem");
//     }else {
//         console.log("success");
//     }
// });
// res.send('Connect' + JSON.stringify(obj));
// })

// ADD NEW USER
// --------------------------------------------
app.get('/loadNewUser', (req,res)=> {
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
            {"2022-08-01": 5.50},
            {"2022-08-01": 5.50},
            {"2022-08-01": 5.50}
        ]
        };
    var obj = {
            TableName: "CitiUsers",
            Item: user
    };
    dynamoDB.put(obj, function(err, data){
        if (err){
            res.send(err);
        }else {
            res.send(JSON.stringify(user));
        }
    });
    
});

// GET USER DETAILS
// --------------------------------------------
app.get('/getUserDetails/:username', (req,res)=> {
    params = {};
    params.TableName = "CitiUsers";
    params.Key = {username : "keith"};
    dynamoDB.get(params, function(err, data){
        if (err){
            res.send(err);
        }else {
            res.send(data.Item);
        }
    });
});


// ADD CONTRIBUTION
// --------------------------------------------
// app.get('/addContribution/:userName?/:cardNum?', (req,res)=> {
app.get('/addContribution/:userName/:amount', (req,res)=> {
    var userName = req.params.userName;
    // var cardNum = req.params.cardNum;
    var amount = req.params.amount;
    if (userName != "noUser" && typeof(userName) != "undefined"){
        params = {};
        params.TableName = "CitiUsers";
        params.Key = {username : userName};
        dynamoDB.get(params, function(err, data){
            if (err){
                res.send(err);
            }else {
                var userDetails = data.Item;
                if (userDetails.mainInvestment != ""){
                    userDetails.investments[userDetails.mainInvestment] += amount;
                    var obj = {
                        TableName: "CitiUsers",
                        Key: {
                            "username" : userName
                        },
                        UpdateExpression: "set"
                    };
                }
            }
        });
    }

});

if (process.env.NODE_ENV) {
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
}

module.exports.handler = serverless(app);

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
    {"2022-08-01": 5.50},
    {"2022-08-01": 5.50},
    {"2022-08-01": 5.50}
]
}
