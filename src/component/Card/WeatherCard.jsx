import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl text-center w-full max-w-sm mx-auto transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">
        {weatherData.location.name}, {weatherData.location.region}
      </h2>
      <h3 className="text-xl font-medium text-blue-600 mb-4">
        {weatherData.location.country}
      </h3>

      <div className="flex justify-center items-center mb-4">
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
          className="w-20 h-20"
        />
        <p className="text-4xl font-semibold text-blue-700 ml-3">
          {weatherData.current.temp_c}°C
        </p>
      </div>

      <p className="text-xl text-gray-700 font-medium mb-2">
        {weatherData.current.condition.text}
      </p>
      <p className="text-sm text-gray-500 capitalize mb-4">
        Pressure: {weatherData.current.pressure_mb} mb
      </p>

      <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
        <div className="flex flex-col items-center">
          <p className="text-lg">🌡️</p>
          <p className="font-semibold">{weatherData.current.temp_c}°C</p>
          <span className="text-xs">Temp</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg">💧</p>
          <p className="font-semibold">{weatherData.current.humidity}%</p>
          <span className="text-xs">Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg">🌬️</p>
          <p className="font-semibold">{weatherData.current.wind_mph} m/s</p>
          <span className="text-xs">Wind Speed</span>
        </div>
      </div>

      {/* <div className="mt-4">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-200">
          Refresh
        </button>
      </div> */}
    </div>
  );
}

export default WeatherCard;
