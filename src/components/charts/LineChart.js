import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const labels = ["1", "2", "3", "4", "5" , "6", "7"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    fill:true,
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: 'rgba(0, 153, 246, 0.5)',
    backgroundColor: 'rgba(0, 153, 246, 0.2)',
    responsive: true
  }]
};

export function LineChart() {
  return <Line data={data} options = {{
    responsive: true,
    maintainAspectRatio: false}}/>;
}
