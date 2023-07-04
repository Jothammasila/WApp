import React from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'

export const Search = () => {
  return (
    <div className='flex flex-row my-8'>

        <div className='flex flex-row justify-center items-center w-3/4 space-x-4'>
            <input type='text' placeholder='Search for city' className='text-xl font-normal p-0.5 shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
            
            <UilSearchAlt size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-mono cursor-pointer transition ease-out hover:scale-125'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-mono cursor-pointer transition ease-out hover:scale-125'>°F</button>
        </div>
    </div>
  )
};
