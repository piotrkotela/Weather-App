import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SavedCities from "./components/SavedCities";
import BookmarkDisabled from "./icons/BookmarkDisabled";
import BookmarkActive from "./icons/BookmarkActive";

if (localStorage.length === 0) {
  localStorage.setItem("cities", "[]")
} 

function App() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [enteredCity, setEnteredCity] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [seeBookmark, setSeeBookmark] = useState(false);
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities"))
    );

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87`
    );
  };

  const followHandler = (data) => {
    setCities(() => {
      return JSON.parse(localStorage.getItem("cities"));
    });
    if (localStorage.length === 0) {
      localStorage.setItem("cities", JSON.stringify([data]));
    } else {
      let existing = localStorage.getItem("cities");
      existing = JSON.parse(existing);
      if (!existing.includes(data)) {
        existing.push(data);
        localStorage.setItem("cities", JSON.stringify(existing));
      }
    }
  };

  const unfollowHandler = (data) => {
    setCities((prevCities) => {
      return prevCities.filter((city) => city !== data);
    });
    if (localStorage.length > 0) {
      let existing = localStorage.getItem("cities");
      existing = JSON.parse(existing);
      existing = existing.filter((city) => city !== data);
      localStorage.setItem("cities", JSON.stringify(existing));
    }
  };

  const fetchSavedCity = async (city) => {
    setWeather([]);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87`
    );
    const data = await response.json();
    setWeather([data]);
    const lon = data.coord.lon;
    const lat = data.coord.lat;
    const responseForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87`
    );
    const forecastData = await responseForecast.json();
    setForecast([forecastData]);
  };

  const fetchWeatherHandler = async (event) => {
    event.preventDefault();
    setWeather([]);
    try {
      if (enteredCity === "") {
        throw new Error("Type in the city.");
      }
      setEnteredCity("");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("The city was not found. Check the spelling.");
      }
      const data = await response.json();
      setWeather([data]);

      const lon = data.coord.lon;
      const lat = data.coord.lat;
      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87`
      );
      const forecastData = await responseForecast.json();
      setForecast([forecastData]);
    } catch (error) {
      setError(error.message);
    }
    setUrl("");
  };

  const seeBookmarkHandler = () => {
    setSeeBookmark(!seeBookmark);
  };

  return (
    <>
      <form className="search-box" onSubmit={fetchWeatherHandler}>
        <div className="search-box-inner">
          {!seeBookmark && <BookmarkDisabled onClick={seeBookmarkHandler} />}
          {seeBookmark && <BookmarkActive onClick={seeBookmarkHandler} />}
          <input
            type="text"
            placeholder="Type the city here"
            value={enteredCity}
            onChange={cityChangeHandler}
            className="search-bar"
          />
        </div>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {cities.length > 0 && seeBookmark && (
        <SavedCities
          cities={cities}
          onUnfollowCity={unfollowHandler}
          onFetchCity={fetchSavedCity}
        />
      )}
      {cities.length === 0 && seeBookmark && (
        <p className="fallback">You haven't bookmakred any cities yet.</p>
      )}
      {weather.length === 0 && error && <p className="fallback">{error}</p>}
      {weather.length > 0 && forecast.length > 0 && (
        <div className="weather-box">
          <WeatherCard
            city={weather[0].name}
            country={weather[0].sys.country}
            description={weather[0].weather[0].description}
            icon={weather[0].weather[0].icon}
            temperature={weather[0].main.temp}
            pressure={weather[0].main.pressure}
            humidity={weather[0].main.humidity}
            wind={weather[0].wind.speed}
            forecast={forecast}
            onFollowCity={followHandler}
            onUnfollowCity={unfollowHandler}
            cities={cities}
          />
        </div>
      )}
    </>
  );
}

export default App;
