import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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


export function LineChart() {
  const [eyeData, setEyeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let eyedata = JSON.parse(localStorage.getItem("eyedata"));
    setEyeData(eyedata);
  }, []);

  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Eye Care Exercises Analysis",
        fill: true,
        data: eyeData,
        borderColor: "rgba(0, 153, 246, 0.5)",
        backgroundColor: "rgba(0, 153, 246, 0.2)",
        responsive: true,
      },
    ],
  };


  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}
