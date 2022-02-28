import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Ear Care Analysis',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function BarChart() {

  const [earData, setEarData] = useState([0,0,0,0,0,0,0])


  useEffect(() => {
    let earData = JSON.parse(localStorage.getItem("eardata"));
    setEarData(earData);
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: 'Earphone Usage Time',
        data: earData,
        backgroundColor: 'rgba(0, 153, 246, 0.5)',
      }
    ],
  };
  
  return <Bar options={options} data={data} />;
}
