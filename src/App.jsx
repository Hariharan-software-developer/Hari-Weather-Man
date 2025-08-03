import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/Pages/LandingPage/LandingPage";
import WeatherPage from "./component/Pages/WeatherPage/WeatherPage";
import Clock from "./component/Clock/Clock";
import { useEffect } from "react";


function App() {
  // Add Tailwind dark mode class toggle detection (optional if you want initial theme)
  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/weatherPage" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
