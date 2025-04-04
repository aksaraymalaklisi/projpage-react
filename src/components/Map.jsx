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
import locationpin from '/markers_icons/location-pin.png'
import locationflag from '/markers_icons/flag.png'
import track1 from '/markers/file1.gpx?url';
import track2 from '/markers/file2.gpx?url';
import track3 from '/markers/file3.gpx?url';
import track4 from '/markers/file4.gpx?url';
import track5 from '/markers/file5.gpx?url'; 
import track6 from '/markers/file6.gpx?url';
import track7 from '/markers/file7.gpx?url';
import track8 from '/markers/file8.gpx?url';
import track9 from '/markers/file9.gpx?url';
import track10 from '/markers/file10.gpx?url'; // Misericórdia.
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
  flex-direction: row;
  margin-top: 16px;
  height: 75vh;
  width: 100%;

  @media (max-width: 760px) {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    justify-items: center;
    height: 100vh;
  }
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

  @media (max-width: 760px) {
    display: flex;
    width: calc(100% + 16px);
    overflow-x: auto; 
    gap: 8px;
  }
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
  
  @media (max-width: 760px) {
    margin-left: 0px;
    width: 100%;
  }
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

  @media (max-width: 760px) {
    gap: 4px;
    padding: 12px; // Reduce padding for smaller screens
    margin-bottom: 12px; // Reduce margin for smaller screens
    font-size: 14px; // Optionally adjust font size
  }
`;

const ButtonDescription = styled.div``;

const MapContainer = styled(LeafletMapContainer)`
  border-radius: 16px;
  height: 100%;
  width: 100%;
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
          iconUrl: locationpin,
          iconSize: [48, 48],
          iconAnchor: [23, 44],
        }),
        endIcon: new L.Icon({
          iconUrl: locationflag,
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
  { label: 'Trilha da Pedra do Elefante', url: track1, distance: '1977.43', difficulty: 'Moderado', duration:'100', routetype:'ida_volta', elevation:'233' },
  { label: 'Trilha da Pedra do Itaocaia', url: track2, distance: '1254.42', difficulty: 'Difícil', duration:'90', routetype:'ida_volta', elevation:'390' },
  { label: 'Trilha da Pedra do Silvado', url: track3, distance: '1913.42', difficulty: 'Difícil', duration:'300', routetype:'ida_volta', elevation:'529' },
  { label: 'Trilha da Pedra de Inoã', url: track4, distance: '1906.28', difficulty: 'Moderado', duration:'90', routetype:'ida_volta', elevation:'513' },
  { label: 'Trilha da Pedra de Macaco', url: track5, distance: '710.24', difficulty: 'Fácil', duration:'40', routetype:'ida_volta', elevation:'246' },
  { label: 'Trilha dos Espraiado/Tomascar', url: track6, distance: '4347.83', difficulty: 'Difícil', duration: '120', routetype: 'ida_volta', elevation: '555' },
  { label: 'Trilha Caminhos de Darwin', url: track7, distance: '6375.64', difficulty: 'Fácil', duration: '120', routetype: 'ida', elevation: '386' },
  { label: 'Trilha de Acesso ao Pico da Lagoinha', url: track8, distance: '4300.00', difficulty: 'Difícil', duration: '300', routetype: 'ida_volta', elevation: '653' },
  { label: 'Trilha de Travessia Silvado x Espraiado', url: track9, distance: '9966.04', difficulty: 'Difícil', duration: '150', routetype: 'ida', elevation: '521' },
  { label: 'Trilha da Cachoeira do Segredo em Silvado', url: track10, distance: '3960.64', difficulty: 'Moderada', duration: '120', routetype: 'ida_volta', elevation: '220' }
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
                <ButtonDescription><GiPathDistance /> {file.routetype == 'ida_volta' ? (file.distance*2 / 1000).toFixed(2) : (file.distance / 1000).toFixed(2)} km</ButtonDescription>
                <ButtonDescription><CiWarning /> {file.difficulty}</ButtonDescription>
                <ButtonDescription><CiClock1 /> {file.duration} minutos</ButtonDescription>
                <ButtonDescription><CgArrowsExchangeAltV /> {file.routetype == 'ida_volta' ? 'Ida e Volta' : 'Ida'}</ButtonDescription>
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