import { Line } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState } from "react";
import '../App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const axios = require('axios').default;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Dashboard() {
  // initialise all the vars to store dynamoDB values
  const [userInvestments, setinvestments] = useState([]);
  const [userLastDailyPortfolio, setLastDailyPortfolio] = useState([]);
  const [userDailyPortfolios, setDailyPortfolios] = useState([]);
  const [selectedStock, setStock] = useState([]);

  const fetchData = async () => {
    const getData = await axios.post('https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/getUserDetails',
      {
        "username": "keith"
      },
    )
      .then(function (response) {
        setinvestments(response.data.investments);
        setLastDailyPortfolio(response.data.dailyPortfolioValue[response.data.dailyPortfolioValue.length - 1].investments);
        setDailyPortfolios(response.data.dailyPortfolioValue);
        setStock("Total")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // values to populate to web page
  var currentPortfolioValue = 0;

  var currentValue = 0; //includes cash
  for (const key of Object.keys(userLastDailyPortfolio)) {
    if (key != "Cash") {
      currentPortfolioValue += userLastDailyPortfolio[key];
    }
    currentValue += userLastDailyPortfolio[key];
  }
  var totalInvested = 0
  var portfolioReturn = 0;
  for (const key of Object.keys(userInvestments)) {
    if (key != "Cash") {
      totalInvested += userInvestments[key];
    }
  }
  portfolioReturn = ((currentPortfolioValue - totalInvested) / totalInvested * 100).toFixed(2);

  // chartJS stuff
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Portfolio Value Over Time',
      },
    }
  };

  var labels = [];
  var datasets = [];
  var totalInvestments = [];
  var investments = {};
  var colorset = ['rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'];

  // for (let key in investments) {
  //   if (key !== "cash") {
  //     labels.push(key);
  //     dataset.push(investments[key]);
  //   }
  // }

  userDailyPortfolios.forEach((portfolio) => {
    labels.push(portfolio["date"]);
    var total = 0;
    for (let key in portfolio["investments"]) {
      if (key !== "Cash") {
        if (investments.hasOwnProperty(key)) {
          investments[key].push(portfolio["investments"][key])
        } else {
          investments[key] = [portfolio["investments"][key]]
        }
        total += portfolio["investments"][key]
      }
    }
    totalInvestments.push(total);
  })

  console.log(totalInvestments)

  investments["Total"] = totalInvestments;

  const data = {
    labels,
    datasets: [
      {
        label: selectedStock,
        data: investments[selectedStock],
        borderColor: colorset,
        backgroundColor: colorset,
        tension: 0.2
      }
    ],
  };

  const changeStock = (event) => {
    setStock(event)
  }

  return (
    <div style={{ margin: "0 50px" }}>
      <h2 className="page-title" style={{ marginBottom: "20px" }}>Dashboard</h2>
      <div style={{ flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-between', marginBottom: "80px" }}>
        <Card className="custom-card" style={{ width: '25%', height: '20%', textAlign: 'center' }}>
          <Card.Body>
            <h5 className="card-heading">Total Current Value</h5>
            <h3 className="mb-2 card-value">${currentValue}</h3>
          </Card.Body>
        </Card>
        <Card className="custom-card" style={{ width: '25%', height: '20%', textAlign: 'center' }}>
          <Card.Body>
            <h5 className="card-heading">Total Portfolio Returns</h5>
            <h3 className="mb-2 card-value">+${portfolioReturn}</h3>
          </Card.Body>
        </Card>
        <Card className="custom-card" style={{ width: '25%', height: '20%', textAlign: 'center' }}>
          <Card.Body>
            <h5 className="card-heading">Total Daily Portfolio Return (%)</h5>
            <h3 className="mb-2 card-value">{Math.round(((portfolioReturn/(currentValue-portfolioReturn)*100) + Number.EPSILON) * 100)/100}%</h3>
          </Card.Body>
        </Card>
      </div>
      <div style={{ flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-between', marginBottom: "80px" }}>
        <div style={{ width: "50%" }}>
          <Form.Select aria-label="Default select example" onChange={e => { changeStock(e.target.value) }}>
            <option>Select stock to view</option>
            {Object.keys(investments).map((data) => {
              console.log(data)
              return (
                <option value={data}>{data}</option>
              );
            })}
          </Form.Select>
          <Line options={options} data={data} style={{ width: "100%", margin: "0 auto" }} />
        </div>
        <Card className="custom-card" style={{ width: '45%', textAlign: 'center' }}>
          <Card.Body>
            <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
              <h5 className="card-heading" style={{ marginRight: '200px' }}>Assets</h5>
              <h5 className="card-heading">Current Value (Daily Change)</h5>
            </div>
            {Object.keys(userLastDailyPortfolio).map((key, i) => {
              const previous = userDailyPortfolios[userDailyPortfolios.length - 2]["investments"]
              const change = ((userLastDailyPortfolio[key].toFixed(2) - previous[key].toFixed(2)) / previous[key].toFixed(2)) * 100
              console.log(change)
              if (change >= 0) {
                return (
                  <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                    <h6 style={{ marginRight: '200px' }}>{key}</h6>
                    <h6>${userLastDailyPortfolio[key].toFixed(2)} (+{change.toFixed(2)}%)</h6>
                  </div>
                )
              } else {
                return (
                  <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                    <h6 style={{ marginRight: '200px' }}>{key}</h6>
                    <h6>${userLastDailyPortfolio[key].toFixed(2)} ({change.toFixed(2)}%)</h6>
                  </div>
                )
              }
            })}
          </Card.Body>
        </Card>
      </div>
    </div >
  );
}