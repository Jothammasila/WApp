import React from 'react'

import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

export const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-cyan-300 py-6 text-xl'>
            <p>Cloudy or any</p>
        </div>

        <div className='flex flex-row justify-between items-center text-white py-3'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-20'/>

            <p className='text-5xl'>22°</p>

            <div className='flex flex-col space-y-2'>
                <div className='flex font-light items-center text-sm justify-center'>
                    <UilTemperature size={20} className="mr-1"/>
                    <p>Fall</p>
                    <span className='ml-1 font-medium'>32°</span>
                </div>

                <div className='flex font-light items-center text-sm justify-center'>
                    <UilTear size={20} className="mr-1"/>
                    <p>Humidity</p>
                    <span className='ml-1 font-medium'>5 g.m-3 </span>
                </div>

                <div className='flex font-light items-center text-sm justify-center'>
                    <UilWind size={20} className="mr-1"/>
                    <p>Wind Speed</p>
                    <span className='ml-1 font-medium'>11.3 kph</span>
                </div>

            </div>
        </div>

        <div className='flex flex-row text-sm text-white items-center justify-center space-x-2 py-7'>

          <UilSun/>
          <p className='font-light'>Rise<span className='ml-1 font-medium'>6:10 AM</span></p>
          <p className='font-light'>|</p>

          <UilSun/>
          <p className='font-light'>High<span className='ml-1 font-medium'>35°</span></p>
          <p className='font-light'>|</p>

          <UilSun/>
          <p className='font-light'>Low<span className='ml-1 font-medium'>14.7°</span></p>
          <p className='font-light'>|</p>

          <UilSunset/>
          <p className='font-light'>Set<span className='ml-1 font-medium'>6:40 PM</span></p>
          
          
        </div>
    </div>
  )
}
