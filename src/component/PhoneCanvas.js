import React, { useState, useEffect } from 'react';
import '../style/style.css';
import StatusBar from './StatusBar';
import TrashCan from './TrashCan';
import GoogleMaps from './MapComponent';
import NewsScroll from './ScrollingBar';

const test = [
  {
    "location":"0",
    "latitude":"34.0607587",
    "longitude":"-118.2942082",
    "name":"Home",
    "address":"123 45th St",
    "post":"98765"
  },
  {
    "location":"1",
    "latitude":"34.0298577",
    "longitude":"-118.2958381",
    "name":"Dorm",
    "address":"321 23th St",
    "post":"90001"
  },{
    "location":"2",
    "latitude":"34.0248798",
    "longitude":"-118.303495",
    "name":"Dorm2",
    "address":"234 56th St",
    "post":"90234"
  }
]
  
const PhoneCanvas = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://ec2-54-190-142-11.us-west-2.compute.amazonaws.com:8080/IoTGarbageCollector-0.0.1-SNAPSHOT/locations');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setLocations(data); // Update state with fetched data
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    return(
        <div className="phone-background">
            <div className="content-area">
                <StatusBar/>
                <GoogleMaps locations={test}/>
                <NewsScroll/>
            </div>
        </div>
    );
};

export default PhoneCanvas;
