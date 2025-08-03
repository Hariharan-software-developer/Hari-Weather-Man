import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = 'https://api.weatherapi.com/v1';

export const getCurrentWeather = async (city) => { debugger
  try {
    // Get current weather data
    const currentResponse = await axios.get(`${baseUrl}/current.json`, {
      params: {
        key: apiKey,
        q: city,
        aqi: 'no', // Disable air quality index for simplicity
      },
    });
    

    const { lat, lon } = currentResponse.data.location;

    // Get hourly and daily forecast data
    const forecastResponse = await axios.get(`${baseUrl}/forecast.json`, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`,
        days: 7,        // Forecast for 7 days
        aqi: 'no',
        alerts: 'no',   // Disable weather alerts for simplicity
      },
    });

    console.log(currentResponse.data.current);
    console.log(forecastResponse.data.forecast.forecastday[0].hour);
    console.log(forecastResponse.data.forecast.forecastday);


    return {
      current: currentResponse.data,
      hourly: forecastResponse.data.forecast.forecastday[0].hour, // 24-hour forecast
      daily: forecastResponse.data.forecast.forecastday,          // 7-day forecast
    };
  } catch (error) {
    console.error("WeatherAPI error:", error);
    throw new Error("City not found");
  }
};
