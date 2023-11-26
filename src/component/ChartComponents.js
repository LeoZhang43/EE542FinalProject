import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import "./LineChart.css";

Chart.register(CategoryScale);

const chartData={
  labels: ['2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Users',
      data: [100, 150, 200, 250, 300],
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      fill: false
    }
  ]
}

function LineChart({chartData}) {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Line Chart</h2> */}
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Filled level",
              color: 'white' // Set title color to white
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'white' // Set x-axis label color to white
              }
            },
            y: {
              ticks: {
                color: 'white' // Set y-axis label color to white
              }
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;