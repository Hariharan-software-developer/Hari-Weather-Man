import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  function openApp() {
    navigate('/weatherPage');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-sky-500 to-indigo-500">
      <div className="text-center p-10 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-md">Welcome to the Weather Man</h1>
        <p className="text-lg text-white mb-8">Get real-time weather updates in seconds</p>
        <button
          onClick={openApp}
          className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out"
        >
          🌦️ Open Weather Man
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
