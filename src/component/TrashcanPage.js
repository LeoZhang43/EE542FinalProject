import React from 'react';
import LineChart from './ChartComponents';
import './TrashCanPage.css'; // Import your CSS file for styling

function TrashCanPage({ datas }) {
  const data = datas[0];
  return (
    <div className="trash-can-page">
      <h2 className='location'>{data.location}</h2>
      <img src={data.img} alt="Trash Can" className="trash-can-image" />
      <p>
        <span className='title'>Fill level:</span>
        <div className='number'>{data.status}/100</div>
      </p>
      {/* <p><span>Humidity:</span><div>{data.humidity}%</div></p> */}
      <p>
        <span className='title'>Predicted Fill Time:</span>
        <div className='number'>11/25/2023 15:58</div>
      </p>

      {/* Display the line chart */}
      <div className="chart-container">
        <LineChart chartData={data.chartData}/>
      </div>
    </div>
  );
}

export default TrashCanPage;
