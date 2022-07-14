import './App.css';
import Select from './components/Select';
import List from './components/List';
import Today from './components/Today';
import { WeatherProvider } from './context/WeatherContext';
function App() {
  return (
    <WeatherProvider>
    <div className="App">
      <div className="container">
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <Today />
        </div>
        <div className="info-side">
          <div className="week-container">
            <List />
          </div>
          <Select />
        </div>
      </div>
    </div>
    </WeatherProvider>
  );
}

export default App;
