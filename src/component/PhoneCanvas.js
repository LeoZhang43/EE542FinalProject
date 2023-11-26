import React, { useRef, useEffect } from 'react';
import '../style/style.css';
import StatusBar from './StatusBar';
import TrashCan from './TrashCan';
import GoogleMaps from './MapComponent';
import NewsScroll from './ScrollingBar';

const positions = [
    { 
        lat: -34.397, 
        lng: 150.644,
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
        lat: -34.387, 
        lng: 150.654,
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
    }, // Position 2
    { 
        lat: -34.377, 
        lng: 150.664,
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
        }}, // Position 3
    // Add more positions as needed
];
  
const PhoneCanvas = () => {
    return(
        <div className="phone-background">
            <div className="content-area">
                <StatusBar/>
                <GoogleMaps positions={positions}/>
                {/* <div className="trash-cans">
                    <TrashCan />
                    <TrashCan />
                    <TrashCan />
                    <TrashCan />
                    <TrashCan />
                    <TrashCan />
                </div> */}
                <NewsScroll/>
            </div>
        </div>
    );
};

export default PhoneCanvas;
