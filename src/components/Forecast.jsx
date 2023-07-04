import React from 'react'

export const Forecast = ({title}) => {
  return (
    <div>
        
        <div className='flex items-center justify-start mt-6'>

            <p className='text-white uppercase font-medium'>{title}</p>

        </div>
        <hr className='my-1'></hr>

        <div className='flex flex-row items-center justify-between text-white'>

            <div className='flex flex-col justify-center items-center'>

                <p className='font-light text-sm'>4:30 PM</p>
                <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1'/>

                <p className='font-medium'>19°</p>

            </div>

            <div className='flex flex-col justify-center items-center'>

                <p className='font-light text-sm'>4:30 PM</p>
                <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1'/>

                <p className='font-medium'>19°</p>

            </div>

            <div className='flex flex-col justify-center items-center'>

                <p className='font-light text-sm'>4:30 PM</p>
                <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1'/>

                <p className='font-medium'>19°</p>

            </div>

            <div className='flex flex-col justify-center items-center'>

                <p className='font-light text-sm'>4:30 PM</p>
                <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1'/>

                <p className='font-medium'>19°</p>

            </div>

            <div className='flex flex-col justify-center items-center'>

                <p className='font-light text-sm'>4:30 PM</p>
                <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1'/>

                <p className='font-medium'>19°</p>

            </div>

        </div>

    </div>
  )
}
