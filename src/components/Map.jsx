import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiPathDistance } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiWarning, CiClock1, CiMountain1 } from "react-icons/ci";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { MapContainer as LeafletMapContainer, TileLayer, Popup as LeafletPopup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-gpx';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Weather from './Weather';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-top: 20px;
`;

const MapBox = styled.div`
  display: flex;
  margin-top: 20px;
  height: 75vh;
  width: 100%;
`;

const MarkersBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% + 16px);
  padding-right: 16px;
  border-radius: 16px;
  overflow-y: auto; 
  overflow-x: hidden; 
  height: 100%;
`;

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
  gap: 16px;
`;

const Button = styled.div`
  width: 100%;
  background-color: ${props => props.selected ? 'rgba(1, 158, 48, 0.2)' : '#f3f3f3'};
  border: none;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 8px;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: ${props => props.selected ? '0px 10px 10px 0px rgba(1, 158, 48, 0.15)' : 'none'};
  
  &:hover {
    box-shadow: 0 10px 10px 0px rgba(0,0,0,.1);
  }
`;

const ButtonDescription = styled.div``;

const MapContainer = styled(LeafletMapContainer)`
  border-radius: 16px;
  height: 100%;
  width: 75%;
`;

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
`;

// Fix the default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const GPXLayer = ({ gpxUrl, onDistanceCalculated }) => {
  const map = useMap();

  useEffect(() => {
    if (!gpxUrl) return;


    const gpxLayer = new L.GPX(gpxUrl, {
      async: true,
      marker_options: {
        startIcon: new L.Icon({
          iconUrl: '/markers_icons/location-pin.png',
          iconSize: [48, 48],
          iconAnchor: [23, 44],
        }),
        endIcon: new L.Icon({
          iconUrl: '/markers_icons/flag.png',
          iconSize: [48, 48],
          iconAnchor: [3, 48],
        }),
      },
    });

    gpxLayer.on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());

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

    gpxLayer.on('error', function (e) {
      console.error('Falha ao carregar arquivo GPX:', e);
    });

    gpxLayer.addTo(map);

    return () => {
      map.removeLayer(gpxLayer);
    };
  }, [gpxUrl, map, onDistanceCalculated]);

  return null;
};

const gpxFiles = [
  { label: 'Trilha da Pedra do Elefante', url: './markers/file1.gpx', distance: '1977.43', difficulty: 'Moderado', duration:'100', routetype:'Ida e Volta', elevation:'233' },
  { label: 'Trilha da Pedra do Itaocaia', url: './markers/file2.gpx', distance: '1254.42', difficulty: 'Difícil', duration:'90', routetype:'Ida e Volta', elevation:'390' },
  { label: 'Trilha da Pedra do Silvado', url: './markers/file3.gpx', distance: '1913.42', difficulty: 'Difícil', duration:'300', routetype:'Ida e Volta', elevation:'529' },
  { label: 'Trilha da Pedra de Inoã', url: './markers/file4.gpx', distance: '1906.28', difficulty: 'Moderado', duration:'90', routetype:'Ida e Volta', elevation:'513' }
];

const Map = () => {
  const position = [-22.92, -42.88];
  const [currentGpx, setCurrentGpx] = useState(gpxFiles[0].url);
  const [selectedButton, setSelectedButton] = useState(gpxFiles[0].label);

  const handleButtonClick = (file) => {
    setCurrentGpx(file.url);
    setSelectedButton(file.label);
  };

  return (
    <MainBox>
      <h2>Explore algumas trilhas de Maricá</h2>
      <MapBox>
        <MapContainer center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {currentGpx && (<GPXLayer gpxUrl={currentGpx}/>)}
        </MapContainer>
        <ExtrasBox>
          <MarkersBox>
            {gpxFiles.map((file) => (
              <Button key={file.label} onClick={() => handleButtonClick(file)} selected={selectedButton === file.label}>
                <ButtonDescription><HiOutlineLocationMarker /> {file.label}</ButtonDescription>
                <ButtonDescription><GiPathDistance /> {(file.distance*2 / 1000).toFixed(2)} km</ButtonDescription>
                <ButtonDescription><CiWarning /> {file.difficulty}</ButtonDescription>
                <ButtonDescription><CiClock1 /> {file.duration} minutos</ButtonDescription>
                <ButtonDescription><CgArrowsExchangeAltV /> {file.routetype}</ButtonDescription>
                <ButtonDescription><CiMountain1 /> {file.elevation}m</ButtonDescription>
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