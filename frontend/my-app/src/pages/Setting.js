import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false
}

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function Setting() {
    return (
        <div style={{ margin: "0 50px" }}>
            <h1>Settings</h1>
            <h3>Set Allocation</h3>
            <div style={{ background: "#FFEECB", width: "100%", height: "500px", flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-around', padding: "45px", borderRadius: "10px", marginBottom: "30px" }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ paddingBottom: "30px" }}>
                        <h2>I wish to contribute...</h2>
                        <Form.Select aria-label="Default select example">
                            <option>Current - 10</option>
                            <option value="1">10</option>
                            <option value="2">15</option>
                            <option value="3">20</option>
                        </Form.Select>
                    </div>
                    <div>
                        <h2>Change main investment</h2>
                        <Form.Select aria-label="Default select example">
                            <option>Current - SPY</option>
                            <option value="1">AAPL</option>
                            <option value="2">VTI</option>
                            <option value="3">OV8</option>
                        </Form.Select>
                    </div>
                    <Button variant="primary" type="submit">
                        Save Allocations
                    </Button>
                </div>
                <div style={{ width: "60%" }}>
                    <h2>Current Investments:</h2>
                    <Pie options={options} data={data} width={"30%"} />
                </div>
            </div>
            <h3>Recent History</h3>
            <div style={{ background: "#FFEECB", width: "100%", height: "500px", flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-around', padding: "45px", borderRadius: "10px" }}>

            </div>
        </div>
    );
}