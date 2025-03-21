import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 8px;
  border-radius: 16px;
  background-color: #f3f3f3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Temperature = styled.p`
  font-size: 1.5rem;
  color: #4787ff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Maricá,BR'); // Default city

  const apiKey = '320f1bd9cbfa69270e808018b406ab52'; // Replace with your OpenWeather API key

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Erro ao obter informações de clima', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <WeatherContainer>
      {weatherData ? (
        <>
          <Title>{weatherData.name}</Title>
          <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
          <Description>{weatherData.weather[0].description}</Description>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </WeatherContainer>
  );
};

export default Weather;