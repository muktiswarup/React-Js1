import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3478603dd48cc8f5027aba81330a1190&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
      setWeather(null);
    }
  };

  const handleButton = async () => {
    if (city) {
      fetchWeather(city);
    } else {
      setError("Please enter a city name.");
      setWeather(null);
    }
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        
        <div
          style={{
            width: "70%",
            margin: "20px auto",
            background: "teal",
            padding: "10px",
            textAlign: "center",
          }}
        >

          <h2 style={{ textAlign: "center", color: "white" }}>Weather App</h2>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Enter City Name"
              style={{ width: "60%", padding: "10px", borderRadius: "10px" }}
              value={city}
              onChange={handleCity}
            />
          </div>
          <button
            style={{
              marginTop: "15px",
              background: "tomato",
              color: "white",
              padding: "7px",
              borderRadius: "10px",
            }}
            onClick={handleButton}
          >
            Check Weather
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weather && (
            <div style={{ marginTop: "15px", color: "white" }}>
              <h3>{weather.name}</h3>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
