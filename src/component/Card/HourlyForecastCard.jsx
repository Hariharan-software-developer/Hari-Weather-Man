import React from 'react';

function HourlyForecastCard({ weatherData }) {
  if (!weatherData || !weatherData.hourly) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Hourly Forecast (Today 24 Hours)
        </h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {weatherData.hourly.slice(0, 24).map((hour, index) => (
              <div
                key={index}
                className="w-[120px] h-[160px] bg-gradient-to-b from-blue-100 via-white to-blue-200 rounded-xl shadow-md p-3 text-center flex-shrink-0 flex flex-col justify-around items-center hover:scale-105 transition-transform"
              >
                <p className="text-sm font-semibold text-blue-700">{hour.time}</p>
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="w-10 h-10 my-2"
                />
                <p className="text-lg font-medium text-gray-800">{hour.temp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastCard;
