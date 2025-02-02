import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'

function GBD() {
  const { courseName } = useContext(UserContext)
  return (
    <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
      <div className='mb-5 w-fit'>
        <Link to="/">
          <h2 className='underline text-[21px] tracking-wide font-[500] w-fit text-[#5876dd] hover:text-[#0C008B]'>{courseName}</h2>
        </Link>
      </div>
      <div className='bg-white'>
        <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
          <h1 className="text-[21px] font-[500] ">GDB</h1>
          <p>&lt;Back</p>
        </div>
        <div className='px-7 py-3 '>
          <div className='border-[1px] h-[30vh] px-5 py-3 text-red-600 border-gray-500'>
            <p>No session found</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GBD
