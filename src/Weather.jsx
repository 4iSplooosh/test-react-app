import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '286f7143085b43e989a180013242301'; // api key double checked and is correct
    const url =  `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=24201`; //api url double check this is correct?

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('zee slurpee machine she is brroke!');
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

  console.log(`weather: ${JSON.stringify(weather?.current?.temp_f, 3, null)}`)

  return (
    <div>
      <h1>Weather in {weather?.location?.name}</h1>
      <p>Temperature: {weather?.current?.temp_f} °C</p>
      {/* <p>Weather: {weather?.weather[0]?.main}</p> */}
    </div>
  );
}
export default Weather;
