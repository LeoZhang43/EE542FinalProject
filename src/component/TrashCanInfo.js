import React, { useRef, useEffect } from 'react';
import '../style/style.css';
import TrashCanPage from './TrashcanPage';

const status = [
    { 
        location: 'LeaveyLibrary',
        img:"https://www.ikea.com/us/en/images/products/knoeckla-step-trash-can-dark-gray__1099724_pe865883_s5.jpg?f=s",
        status:4,
        humidity:37,
        nextFillTime:36,
        chartData: {
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
    }, // Position 1
    { 
        location: 'LeaveyLibrary',
        img:"https://www.ikea.com/us/en/images/products/knoeckla-step-trash-can-dark-gray__1099724_pe865883_s5.jpg?f=s",
        status:4,
        humidity:37,
        nextFillTime:36,
        chartData: {
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
    }, // Position 1
    { 
        location: 'LeaveyLibrary',
        img:"https://www.ikea.com/us/en/images/products/knoeckla-step-trash-can-dark-gray__1099724_pe865883_s5.jpg?f=s",
        status:4,
        humidity:37,
        nextFillTime:36,
        chartData: {
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
    }, // Position 1
    // Add more positions as needed
];
  
const TrashCanInfo = () => {
    return(
        <div className="phone-background">
            <div className="content-area">
                <TrashCanPage datas={status}/>
            </div>
        </div>
    );
};

export default TrashCanInfo;
