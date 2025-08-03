import React from 'react';

function DailyForecastCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Daily Forecast (Next 7 Days)
        </h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {weatherData.daily.slice(0, 7).map((day, index) => (
              <div
                key={index}
                className="w-[120px] h-[160px] bg-gradient-to-b from-yellow-100 via-white to-yellow-200 rounded-xl shadow-md p-3 text-center flex-shrink-0 flex flex-col justify-around items-center hover:scale-105 transition-transform"
              >
                <p className="text-sm font-semibold text-blue-700">{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                  className="w-10 h-10 my-2"
                />
                <p className="text-lg font-medium text-gray-800">{day.day.avgtemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecastCard;
