import React from 'react'
import useWeather from '../../context/WeatherContext'
function Select() {
  const data = useWeather();
  const cityChange = (e) => {
    data.setSelectCity(e.target.value);
  }
  return (
    <div className="location-container">
        <select onChange={cityChange} className="location-button" defaultValue={data.selectCity}>
            {
                data.cities.map((city) => <option key={city.id} value={city.name}>{city.name}</option>)
            }
        </select>
    </div>
  )
}

export default React.memo(Select)