import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiPathDistance } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MapContainer as LeafletMapContainer, TileLayer, Popup as LeafletPopup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-gpx';
import Weather from './Weather';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-top: 20px;
`

const MapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  height: 75vh;
  width: 100%;
  
`
const MarkersBox = styled.div`
  display: flex;
  flex-direction: column;
`
const ExtrasBox = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  height: 100%;
  width: 25%;
  margin-left: 16px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 30px 40px 40px rgba(0,0,0,.1);
`

const Button = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #f3f3f3;
  border: none;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 20px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover{
    box-shadow: 0 10px 10px 0px rgba(0,0,0,.1);
  }
`

const MapContainer = styled(LeafletMapContainer)`
  border-radius: 16px;
  height: 100%;
  width: 75%;
`

const Popup = styled(LeafletPopup)`
  .leaflet-popup-content-wrapper {
    box-shadow: 0 20px 20px 20px rgba(0,0,0,.1);
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-close-button {
   display: none; 
}
`

const GPXLayer = ({ gpxUrl, onDistanceCalculated }) => {
  const map = useMap();

  useEffect(() => {
    if (!gpxUrl) return;

    // Create a new GPX layer and add it to the map
    const gpxLayer = new L.GPX(gpxUrl, {
      async: true,
      wptIconUrls: false,
      marker_options:{
        startIcon: new L.Icon({
          iconUrl: 'dinosaur.png', // Replace with your start icon path
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        }),
        endIcon: new L.Icon({
          iconUrl: 'path/to/end-icon.png', // Replace with your end icon path
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        }),
      }
    });

    gpxLayer.on('loaded', function(e) {
      map.fitBounds(e.target.getBounds()); // Make sure map is within the boundaries of the screen.

      const totalDistance = e.target.get_distance && e.target.get_distance();
      if (totalDistance !== undefined) {
        console.log(`Distância total: ${totalDistance} metros`);
      } else {
        console.log('Falha ao obter distância total.');
      }

      if (onDistanceCalculated && totalDistance !== undefined) {
        onDistanceCalculated(totalDistance);
      }
    });

    gpxLayer.addTo(map);

    // Cleanup: remove the GPX layer on component unmount -- Thanks, ChatGPT.
    return () => {
      map.removeLayer(gpxLayer);
    };
  }, [gpxUrl, map, onDistanceCalculated]);

  return null;
};

const Map = () => {
  const position = [-22.92, -42.88];

  const gpxFiles = [
    { label: 'Trilha da Pedra do Elefante', url: '/markers/file1.gpx', distance:'1977.43' },
    { label: 'Trilha da Pedra do Itaocaia', url: '/markers/file2.gpx', distance:'1254.42' },
    { label: 'Trilha da Pedra do Silvado', url: '/markers/file3.gpx', distance:'1913.42' },
    { label: 'Trilha da Pedra de Inoã', url: '/markers/file4.gpx', distance:'1906.28' }
  ];

  const [currentGpx, setCurrentGpx] = useState(gpxFiles[0].url);
  const [trackDistance, setTrackDistance] = useState(null);

  return (
      <MainBox>
      <h2>Explore algumas trilhas de Maricá</h2>
      <MapBox>
        <MapContainer center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {currentGpx && (
            <GPXLayer
              gpxUrl={currentGpx}
              onDistanceCalculated={(distance) => setTrackDistance(distance)}
            />
          )}
          
        </MapContainer>
        <ExtrasBox>
          <MarkersBox>
            {gpxFiles.map((file) => (
              <Button key={file.label} onClick={() => setCurrentGpx(file.url)}>
                <HiOutlineLocationMarker /> {file.label}
                <br/>
                <GiPathDistance /> {(file.distance/1000).toFixed(2)} km
              </Button>
            ))}
          </MarkersBox>
          <Weather />
        </ExtrasBox>
      </MapBox>
      </MainBox>
  );
};

export default Map;
