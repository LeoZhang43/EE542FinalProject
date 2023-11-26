import React, { useRef, useEffect } from 'react';
import LineChart from './ChartComponents';
import { useHistory } from 'react-router-dom';

const GoogleMaps = ({ locations }) => {
  const mapRef = useRef(null);
  let googleMap = null;
  let infoWindow = null;

  useEffect(() => {
    if (mapRef && mapRef.current) {
      googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 34.0607587, lng: -118.2942082 }, // Default center coordinates
        zoom: 12, // Default zoom level
      });

      infoWindow = new window.google.maps.InfoWindow(); // Create a single info window

      addMarkers(googleMap, locations);
    }
  }, [locations]);

  const addMarkers = (map, locations) => {
    if (!map || !locations || !Array.isArray(locations)) return;

    locations.forEach((location, index) => {
      const lat = parseFloat(location.latitude); // Access latitude property
      const lng = parseFloat(location.longitude); // Access longitude property
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
      });

      marker.addListener('click', () => {
        // const history = useHistory();

        const trashCanInfo = `
          Trash can number ${index + 1}<br>
          Locations lat ${lat} lng:${lng}<br>
          Name ${location.name}<br>
          Address ${location.address}<br>
          Post ${location.post}<br>
          <a href="/about"}>Go to About</a>
          `;

          infoWindow.setContent(trashCanInfo);
          infoWindow.open(map, marker);
      });
    });
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMaps;
