import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import "bootstrap/dist/css/bootstrap.min.css";

const data = {
  labels: [Date().toLocaleString(),2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#85adfd',
      borderColor: '#02318f',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
      barThickness:20
    }
  ]
};
const options = {
    
    plugins: {
        legend: {
          display: false
        }
      },
    scales:{
            xAxes: {
                
                display: false //this will remove all the x-axis grid lines  
            },
            y:{
                display: false
            }}};
function Chart_bar() {
  return (
    <div>
        <Bar
          data={data}
          options={options}
          
          height={55} 
         
        />
    </div>
  );
}
export default Chart_bar;