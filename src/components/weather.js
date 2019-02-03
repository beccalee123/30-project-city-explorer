import React from 'react';



const Weather = (props) => {
  
 return(
 <section>
  <h3>Results from Dark Sky Api</h3>
  <ul className="weather-results">
  { props.weather.map((forecast, idx) => 
      <li> The forecast for {forecast.time} is {forecast.forecast} </li>
  ) }  
  </ul>
</section>
 );
}

export default Weather;