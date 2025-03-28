import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 8px;
  border-radius: 16px;
  background-color: #f3f3f3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  max-width: 400px; /* Set a max width for larger screens */
  margin: 0 auto; /* Center the container */

  @media (max-width: 600px) {
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #3a3a3a;
  text-align: center; /* Center text */

  @media (max-width: 600px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
`;

const Temperature = styled.p`
  font-size: 1.5rem;
  color: #4787ff;

  @media (max-width: 600px) {
    font-size: 1.2rem; /* Smaller font size for mobile */
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #5a5a5a;
  text-align: center; /* Center text */

  @media (max-width: 600px) {
    font-size: 1rem; /* Smaller font size for mobile */
  }
`;

const Loading = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Maricá,BR');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_OPENWEATHERAPI_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError('Erro ao obter informações de clima');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <WeatherContainer>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <Title>{weatherData.name}</Title>
          <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
          <Description>{weatherData.weather[0].description}</Description>
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;