import React from 'react'

function CourseSelection() {
  return (
    <div className='px-8 h-full py-6 bg-[#F2F3F8] font-["Roboto"]'>
      <div className='bg-white'>
        <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
        <h1 className="text-[21px] font-[500] ">My Studied Courses</h1>
        <p>&lt;Back</p>
        </div>
        <div className='px-5 pt-5'>
        <div className="mt-10 bg-white shadow-md border border-gray-200 rounded-lg">
      <div className="p-4  bg-[#F4F5F8] border-b border-gray-300">
        <h1 className="text-lg font-bold text-[#214289]">
          Course Selection Fall 2024{" "}
          <a target='blank' href="https://handbook.vu.edu.pk/HandBook_Pages/Course%20Selection%20BS%20(Software%20Engineering).htm"><span className="text-sm hover:underline font-normal">(Rules and Procedures)</span></a>
        </h1>
      </div>
      <div className='w-full px-5 pt-5 bg-[#EEEEEE]'>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Student ID:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>bc12344556</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Name:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>Ali Gates</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Study program:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>BS(Software Engineering)</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>CGPA:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>3.0</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Effective CGPA:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>2.69</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Credit Earned:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>67</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Credit Exempted:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>0</div>
        </div>
        <div className='flex w-full border-[0.2px] bg-[#F4F5F8] border-gray-300'>
          <div className='w-[30%] text-xs text-[#ff6600] font-bold text-end px-2 py-2 border-r-[1px] border-gray-300'>Current Semester No:</div>
          <div className='w-[70%] text-xs text-gray-700 font-[500] px-2 py-2'>5</div>
        </div>
      </div>
      <div className="p-4 bg-blue-700 text-white text-center font-medium">
        Course Selection for Fall 2024 semester will be opened as per the date
        given in the Academic Calendar.
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSelection
