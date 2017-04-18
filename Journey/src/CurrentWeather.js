import React from 'react';

const TodayWeather = ({
	todayWeather,
	destination
}) => {
    return (
       <div className='text-center border brand-color3' key='currentWeather' >
			<b>{destination.city.toUpperCase()}, {destination.state.toUpperCase()}</b><br/>
			<img src={"http://openweathermap.org/img/w/"+todayWeather.weather[0].icon+".png"}  alt="weather_icon" /> 
			<b> {todayWeather.weather[0].description} </b> 
			<span>&nbsp; {parseInt(todayWeather.main.temp - 273.15,10)}˚C</span><br/> 
			<span><b>Wind Direction: </b>{todayWeather.wind.deg}  degree</span><br/>
			<span><b>&nbsp; Wind Speed: </b>{todayWeather.wind.speed} m/s</span> 	                
      </div>
    )
}
export default TodayWeather;