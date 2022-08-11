import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { React, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';

ChartJS.register(ArcElement, Tooltip, Legend);

export function History() {
    // const [currentAmount, setAmount] = useState();
    // const [currentInvestment, setInvestment] = useState();
    // const [investments, setInvestments] = useState();
    const [transactions, setTransactions] = useState([]);
    // const [fixedContribution, setFixedContribution] = useState(50);

    // const fetchInvestment = async () => {
    //     try {
    //         const data = await axios.post(
    //             `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/getUserDetails`, { username: "keith" }
    //         );
    //         setInvestment(data.data.mainInvestment);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const fetchAmount = async () => {
    //     try {
    //         const data = await axios.post(
    //             `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/getUserDetails`, { username: "keith" }
    //         );
    //         setAmount(data.data.roundingValue)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const fetchInvestments = async () => {
    //     try {
    //         const data = await axios.post(
    //             `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/getUserDetails`, { username: "keith" }
    //         );
    //         setInvestments(data.data.investments)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchTransactions = async () => {
        try {
            const data = await axios.post(
                `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/getUserDetails`, { username: "keith" }
            );
            setTransactions(data.data.transactionHistory)
        } catch (error) {
            console.log(error)
        }
    }

    // const changeAmount = (event) => {
    //     setAmount(event)
    // }

    // const changeInvestment = (event) => {
    //     setInvestment(event)
    // }

    // const changeFixedContribution = (event) => {
    //     setFixedContribution(event);
    // }

    // const saveAllocations = async () => {
    //     const reqAmount = {
    //         "username": "keith",
    //         "newRoundingValue": currentAmount
    //     }
    //     const reqInvestment = {
    //         "username": "keith",
    //         "newMainInvestment": currentInvestment
    //     }
    //     try {
    //         await axios.post(
    //             `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/changeRoundingValue`, reqAmount
    //         );
    //         await axios.post(
    //             `https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/changeMainInvestment`, reqInvestment
    //         );
    //         window.location.reload()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        // Runs only on the first render
        // fetchAmount();
        // fetchInvestment();
        // fetchInvestments();
        fetchTransactions();
    }, []);

    // const options = {
    //     responsive: true,
    //     maintainAspectRatio: false
    // }

    // var labels = [];
    // var dataset = [];
    // var colorset = ['rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'];

    // for (let key in investments) {
    //     if (key !== "cash") {
    //         labels.push(key);
    //         dataset.push(investments[key]);
    //     }
    // }

    // const data = {
    //     labels: labels,
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //             data: dataset,
    //             backgroundColor: colorset,
    //             borderColor: colorset,
    //             borderWidth: 1,
    //         },
    //     ],
    // };

    console.log(transactions)

    return (
        <div style={{ margin: "0 50px" }}>
            {/* <h1>Settings</h1> */}
            {/* <h3>Set Allocation</h3>
            <div style={{ background: "#FFEECB", width: "100%", height: "500px", flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-around', padding: "45px", borderRadius: "10px", marginBottom: "30px" }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ paddingBottom: "30px" }}>
                        <h4>When I make payments, I wish to round to the nearest...</h4>
                        <Form.Select aria-label="Default select example" onChange={e => { changeAmount(e.target.value) }}>
                            <option value={currentAmount}>Current amount: {currentAmount}</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </Form.Select>
                    </div>
                    <div style={{ paddingBottom: "30px" }}>
                        <h4>Change Main Investment</h4>
                        <Form.Select aria-label="Default select example" onChange={e => { changeInvestment(e.target.value) }}>
                            <option value={currentInvestment}>Current investment: {currentInvestment}</option>
                            <option value="SPY">SPY</option>
                            <option value="GME">GME</option>
                            <option value="PLTR">PLTR</option>
                        </Form.Select>
                    </div>
                    <div>
                        <h4>Monthly Fixed Contributions</h4>
                        <p>{fixedContribution}</p>
                        <Form.Range aria-label="Default select example" onChange={e => { changeFixedContribution(e.target.value) }}>
                            {/* <option value={currentInvestment}>Current investment: {currentInvestment}</option>
                            <option value="SPY">SPY</option>
                            <option value="GME">GME</option>
                            <option value="PLTR">PLTR</option> 
                        </Form.Range>
                    </div>
                    <Button variant="primary" type="submit" onClick={saveAllocations}>
                        Save Allocations
                    </Button>
                </div>
                <div style={{ width: "60%" }}>
                    <h2>Investments:</h2>
                    <Pie options={options} data={data} width={"30%"} />
                </div>
            </div> */}
            <h1>Transaction History</h1>
            <div style={{ background: "#FFEECB", width: "100%", height: "500px", flexDirection: "row", display: 'flex', gap: '20px', padding: "45px", borderRadius: "10px", overflow: "scroll" }}>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Transaction Amount</th>
                            <th>Contribution Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.reverse().map((data) => {

                            console.log(data)
                            return (
                                <tr>
                                    <td>{data[0]}</td>
                                    <td>{data[4] !== "" ? data[4] : "Direct Contribution"}</td>
                                    <td>{Math.round((Number.parseFloat(data[3]) + Number.EPSILON) * 100)/100}</td>
                                    <td>{Math.round((data[1] + Number.EPSILON) * 100)/100}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}