import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import logo from './logo.svg';
import './App.css';
import { TopButtons } from './components/TopButtons';
import { Search } from './components/Search';
import { TimeAndLocation } from './components/TimeAndLocation';
import { TemperatureAndDetails } from './components/TemperatureAndDetails';
import { Forecast } from './components/Forecast';
import getFormattedWeatherData from './Services/weatherServices';


function App() {

  const fetchWeather = async() =>{
    const data = await getFormattedWeatherData({q:'london'});
    console.log(data);
  }

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Search/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title='Hourly Forecast'/>
      <Forecast title='Daily Forecast'/>
    </div>
  );
}

export default App;
