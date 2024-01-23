import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '286f7143085b43e989a180013242301'; // Replace with your API key
    const url = ` http://api.weatherapi.com/v1/current.json`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setWeather(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].main}</p>
    </div>
  );
}
export default Weather;
