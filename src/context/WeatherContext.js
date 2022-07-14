import { createContext, useContext, useState, useEffect } from 'react'
import cities from "../json/cities.json";
import axios from "axios";
import {API_URL, API_ONE_URL, API_KEY,  DEFAULT_CITY} from "../components/Api";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [selectCity, setSelectCity] = useState(DEFAULT_CITY);
    const [Daily, setDaily] = useState([]);
    const [Select, setSelect] = useState(false);
    const [Indis, setIndis] = useState(0);


    useEffect(() => {
        getData(selectCity);
        setSelect(false);
        setIndis(0);
    }, [selectCity]);

    const getData = async (selectCity) => {
       const {data: getLot} = await axios(API_URL + selectCity + "&appid=" + API_KEY);
       const lat = getLot[0].lat;
       const lon = getLot[0].lon;
       const {data: getData } = await axios(API_ONE_URL + "lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY +"&units=metric&cnt=4&exclude=minutely");
       setDaily(getData.daily);
    }

    const values = {
        cities,
        selectCity,
        setSelectCity,
        Daily,
        Select,
        setSelect,
        Indis,
        setIndis
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
};

const useWeather = () => useContext(WeatherContext);

export default useWeather;