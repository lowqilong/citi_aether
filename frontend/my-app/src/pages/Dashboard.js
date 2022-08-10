import { Line } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.2
    }
  ],
};

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ flexDirection: "row", display: 'flex', gap: '20px' }}>
        <Card className="customCard" style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Current Value</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2000.00</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="customCard" style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Portfolio Return</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">+1000.00</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="customCard" style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Return</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">+100.00%</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="customCard" style={{ width: '18rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Transactions</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">60</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <div style={{ margin: '50px 0' }}>
        <Line options={options} data={data} width="1200" height="350" style={{ margin: "0 auto" }} />
      </div>
      <div style={{ flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        <Card className="customCard" style={{ width: '45%', textAlign: 'center' }}>
          <Card.Body style={{ paddingBottom: '0' }}>
            <Card.Title>Portfolio Value</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2000.00</Card.Subtitle>
          </Card.Body>
          <hr style={{ margin: '0' }}></hr>
          <Card.Body style={{ flexDirection: "row", display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div>
              <h5>Daily Change</h5>
              <h5>200.00</h5>
            </div>
            <div>
              <h5>%</h5>
              <h5>100</h5>
            </div>
          </Card.Body>
        </Card>
        <Card className="customCard" style={{ width: '45%', textAlign: 'center' }}>
          <Card.Body>
            <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
              <h6 style={{ marginRight: '200px' }}>Asset</h6>
              <h6>Latest</h6>
              <h6>Daily</h6>
              <h6>Portfolio</h6>
            </div>
            <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
              <h6 style={{ marginRight: '200px' }}>SPY</h6>
              <h6>1.60</h6>
              <h6>0.00</h6>
              <h6>1000</h6>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div >
  );
}