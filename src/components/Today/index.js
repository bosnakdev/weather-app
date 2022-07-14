import React from 'react'
import useWeather from '../../context/WeatherContext';
import { API_ICON } from '../Api';
import moment from 'moment-timezone';
function Today() {
    const data = useWeather();
    const todayDetail = data.Select ? data.Select : data.Daily.slice(0, 1);
    moment.tz.setDefault("Europe/Istanbul");
    
    return (
        <>
            {
                todayDetail.map((today, i) => {
                    return <div key={i}><div className="date-container">
                        <h2 className="date-dayname">{moment.unix(today.dt).format("dddd")}</h2><span className="date-day">{moment.unix(today.dt).format("D MMMM yy")}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{data.selectCity}, TR</span>
                    </div>
                        <div className="weather-container"><i className="weather-icon"><img src={API_ICON + today.weather[0].icon + "@2x.png"} alt={today.weather[0].description} /></i>
                            <h1 className="weather-temp">{today.temp.min}°</h1>
                        </div></div>
                })
            }
        </>
    )
}

export default React.memo(Today)