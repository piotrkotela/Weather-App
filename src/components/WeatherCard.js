import "./WeatherCard.css";
import BookmarkFollow from "../icons/BookmarkUnfollow";
import BookmarkUnfollow from "../icons/BookmarkFollow";

const WeatherCard = (props) => {
  let imgSrc = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  let temperature = parseFloat(props.temperature);
  temperature = temperature.toFixed(0);
  let wind = (props.wind * 3.6).toFixed(0);
  const forecast = props.forecast;
  const date = new Date();
  const day = date.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="card">
      <div className="card-header">
        <h2>
          {props.city}, {props.country}
        </h2>
        {!((props.cities).includes(props.city)) && <BookmarkUnfollow onClick={props.onFollowCity} city={props.city}/>}
        {((props.cities).includes(props.city)) && <BookmarkFollow onClick={props.onUnfollowCity} city={props.city}/>}

      </div>
      <div className="description-box">
        <h3>{props.description}</h3>
        <h3>
          Wind {wind}km/h • {props.pressure}hPa{" "}
        </h3>
      </div>
      <div className="temp-box">
        <img src={imgSrc} alt="weather-img" />
        <h1>{temperature}°</h1>
      </div>

      <table>
        <tr>
          <td>{weekday[day + 1]}</td>
          <td>{weekday[day + 2]}</td>
          <td>{weekday[day + 3]}</td>
          <td>{weekday[day + 4]}</td>
          <td>{weekday[day + 5]}</td>
        </tr>
        <tr>
          <td>{forecast[0].daily[1].temp.day.toFixed(0)}°</td>
          <td>{forecast[0].daily[2].temp.day.toFixed(0)}°</td>
          <td>{forecast[0].daily[3].temp.day.toFixed(0)}°</td>
          <td>{forecast[0].daily[4].temp.day.toFixed(0)}°</td>
          <td>{forecast[0].daily[5].temp.day.toFixed(0)}°</td>
        </tr>
        <tr>
          <td>{forecast[0].daily[1].temp.morn.toFixed(0)}°</td>
          <td>{forecast[0].daily[2].temp.morn.toFixed(0)}°</td>
          <td>{forecast[0].daily[3].temp.morn.toFixed(0)}°</td>
          <td>{forecast[0].daily[4].temp.morn.toFixed(0)}°</td>
          <td>{forecast[0].daily[5].temp.morn.toFixed(0)}°</td>
        </tr>
      </table>
    </div>
  );
};

export default WeatherCard;
