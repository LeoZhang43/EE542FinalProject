import React, { useRef, useEffect } from 'react';
import LineChart from './ChartComponents';
import { useHistory } from 'react-router-dom';

const GoogleMaps = ({ positions }) => {
  const mapRef = useRef(null);
  let googleMap = null;
  let infoWindow = null;

  useEffect(() => {
    if (mapRef && mapRef.current) {
      googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 }, // Default center coordinates
        zoom: 12, // Default zoom level
      });

      infoWindow = new window.google.maps.InfoWindow(); // Create a single info window

      addMarkers(googleMap, positions);
    }
  }, [positions]);

  const addMarkers = (map, positions) => {
    if (!map || !positions || !Array.isArray(positions)) return;

    positions.forEach((position, index) => {
      const marker = new window.google.maps.Marker({
        position,
        map,
      });

      marker.addListener('click', () => {
        // const history = useHistory();

        const trashCanInfo = `
          Trash Can ${index + 1}<br>
          Location: ${position.lat}, ${position.lng}<br>
          <br>
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
