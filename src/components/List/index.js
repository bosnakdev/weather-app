import React from 'react'
import useWeather from '../../context/WeatherContext';
import { API_ICON } from '../Api';
import moment from 'moment-timezone';

function List() {
    const data = useWeather();
    const dailyPart1 = data.Daily.slice(0, 4);
    const dailyPart2 = data.Daily.slice(0, 4);
    moment.tz.setDefault("Europe/Istanbul");
    const onClickDay = (day, i) => {
        data.setSelect([day]);
        data.setIndis(i);
    }
    return (
        <>
            <ul className="week-list">
                {
                    dailyPart1.map((day, i) => {
                       return <li key={i} className={i === data.Indis ? "active" : ""} onClick={() => onClickDay(day, i)}><i className="day-icon"><img src={API_ICON + day.weather[0].icon + ".png"} alt={day.weather[0].description} /></i><span className="day-name">{moment.unix(day.dt).format("ddd")}</span><span className="day-temp">{day.temp.min}°</span></li>
                    })
                }
                <div className="clear"></div>
            </ul>
            <ul className="week-list">
                {
                    dailyPart2.map((day, i) => {
                        return <li key={i} className={parseInt(i)+4 === data.Indis ? "active" : ""} onClick={() => onClickDay(day, parseInt(i)+4)}><i className="day-icon"><img src={API_ICON + day.weather[0].icon + ".png"} alt={day.weather[0].description} /></i><span className="day-name">{moment.unix(day.dt).format("ddd")}</span><span className="day-temp">{day.temp.min}°</span></li>
                    })
                }
                <div className="clear"></div>
            </ul>
        </>
    )
}

export default React.memo(List)