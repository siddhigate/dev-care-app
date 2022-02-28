import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
  
const PieChart = () => {

  const [badcount, setBadCount] = useState(0);
  const [goodcount, setGoodCount] = useState(0);

  useEffect(() => {
    let badpostureCount = Number(localStorage.getItem("badposturecount"));
    let goodpostureCount = Number(localStorage.getItem("goodposturecount"));

    if(badpostureCount) {
      setBadCount(badpostureCount);
    }
    if(goodpostureCount) {
      setGoodCount(goodpostureCount)
    }
  }, [])
  

  const data = {
    labels: ['Bad posture', 'Good posture'],
    datasets: [
      {
        label: '# count',
        data: [badcount, goodcount],
        backgroundColor: [
            'rgba(220, 38, 38, 0.7)',
            'rgba(0, 153, 246, 0.7)',
          
        ],
        borderColor: [
            'rgba(220, 38, 38, 1)',
            'rgba(0, 153, 246, 1)',
          
        ],
        borderWidth: 1,
        
  
      },
    ],
  };

  if(badcount === 0 & goodcount === 0){
    return <div className='flex flex-col flex-items-center'>
          <img src="./assets/cartoon/smileydev.png" alt="cartoon saying hi" width="300" height="300"></img>
          <p className='fs-md'>Start using this feature to view the graph analysis here!</p>
          </div>
  }

    return (
         <Pie data={data} />
    );
};

export default PieChart;