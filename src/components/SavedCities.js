import "./SavedCities.css";

const SavedCities = (props) => {
  let cities = props.cities
  return (
    <div className="city-box">
      {cities.map((city) => (
        <>
        <div className="city">
          <p>{city}</p>
          <div>
            <button className="city-check" onClick={props.onFetchCity.bind(null, city)}>check</button>
            <button className="city-delete" onClick={props.onUnfollowCity.bind(null,city)}>delete</button>
          </div>
        </div>
        </>
      ))}
    </div>
  );
};
export default SavedCities;
