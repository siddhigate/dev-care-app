import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Bad posture', 'Good posture'],
    datasets: [
      {
        label: '# count',
        data: [12, 19],
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
  
const PieChart = () => {
    return (
         <Pie data={data} />
    );
};

export default PieChart;