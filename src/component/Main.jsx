import React from 'react'
import Sidebar from './Sidebar'
import Course from '../MultiComponents.jsx/Course'
import courses from '../data'

function Main() {
  return (
    <div className='w-[100%]'>
      <div className='px-8 py-8'>
        <div className='pb-5'>
          <h1 className='text-xl font-medium font-["Roboto"]'>My Courses ( <span className='text-[#5867DD]'>Fall 2024</span> )</h1>
        </div>
        <div className='columns-2 max-lg:flex max-lg:flex-col gap-5'>
          {courses.map((item , index)=> (
            <Course key={index} course={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main
