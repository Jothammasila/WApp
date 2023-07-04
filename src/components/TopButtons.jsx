import React from 'react'

export const TopButtons = () => {

    const cities = [
        {
            id:1,
            title: "London"
        },

        {
            id:2,
            title: "Syndey"
        },

        {
            id:3,
            title: "Tokyo"
        },

        {
            id:4,
            title: "Toronto"
        },

        {
            id:5,
            title: "Paris"
        },
    ];
  return (
    <div className='flex items-center justify-around font-sans my-6'>
        {cities.map((city) =>( <button key={city.id} className='text-lg text-white font-medium'>{city.title}</button>))}
        
    </div>
  )
}
