import { useState } from "react";
import axios from "axios";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");

    function handleCity(event) {
        setCity(event.target.value);
    }

    function getWeather() {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81623de5042db5e7de6b709d6263ad6f`)
            .then(response => {
                console.log(response.data);
                setWeather(response.data.weather[0].main);
                setTemp(response.data.main.temp);
                setDesc(response.data.weather[0].description);
            })
            .catch(error => {
                console.error("Error fetching weather data", error);
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-indigo-500 p-4">
            <div className="bg-purple bg-opacity-20 backdrop-blur-md rounded-xl p-6 text-center w-full max-w-md shadow-lg text-white">
                <h1 className="text-3xl font-bold mb-4">🌤️ Weather Report</h1>
                <p className="mb-4">Get the latest weather updates for your city</p>

                <div className="flex gap-2 mb-4">
                    <input
                        onChange={handleCity}
                        type="text"
                        placeholder="Enter Your City Name"
                        className="flex-1 p-2 rounded text-black focus:outline-none"
                    />
                    <button
                        onClick={getWeather}
                        className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Get Report
                    </button>
                </div>

                {weather && (
                    <div className="mt-4 space-y-2 text-lg">
                        <p><strong>Weather:</strong> {weather}</p>
                        <p><strong>Temperature:</strong> {temp}°C</p>
                        <p><strong>Description:</strong> {desc}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weather;