import React from 'react'
import { Link } from 'react-router-dom'
import demoCard from '../images/demoCard1.jpg'

const Homepage = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div class='max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            class='w-full'
            src={demoCard}
            alt='Sunset in the mountains'
          />
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Welcome to ...</div>
            <p class='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div
            class='px-6 pt-4 pb-10'
            style={{display: 'flex', justifyContent: 'space-between'}}
          >
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            <Link to="/login">Login</Link>
            </button>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
