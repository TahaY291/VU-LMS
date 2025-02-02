import React from 'react'

const GradingScheme = () => {
  return (
    <div className='p-6'>
      <h1 className="text-[16px] font-[500] tracking-wide pb-5">Grading Scheme</h1>
      <table className='w-full'>
        <thead className='bg-[#716ACA] text-white text-[14px] '>
          <tr>
            <th className="font-[500] border border-gray-300 px-2 py-2">Grade</th>
            <th className="font-[500] border border-gray-300 px-2 py-2">Grade Points</th>
            <th className="font-[500] border border-gray-300 px-2 py-2">Equivalent Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr  className='text-gray-700 text-sm bg-[#F4F5F8]'>
            <td className="border border-gray-300 p-2">A+</td>
            <td className="border border-gray-300 p-2"> 4.00</td>
            <td className="border border-gray-300 p-2 text-right">90 - 100</td>
          </tr>
          <tr  className='text-gray-700 text-sm '>
            <td className="border border-gray-300 p-2">A</td>
            <td className="border border-gray-300 p-2"> 4.00</td>
            <td className="border border-gray-300 p-2 text-right">85 - 89.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm bg-[#F4F5F8]'>
            <td className="border border-gray-300 p-2">A-</td>
            <td className="border border-gray-300 p-2"> 3.66 - 3.99</td>
            <td className="border border-gray-300 p-2 text-right">80 - 84.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm '>
            <td className="border border-gray-300 p-2">B+</td>
            <td className="border border-gray-300 p-2">3.33 - 3.65</td>
            <td className="border border-gray-300 p-2 text-right">75 - 79.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm bg-[#F4F5F8]'>
            <td className="border border-gray-300 p-2">B</td>
            <td className="border border-gray-300 p-2"> 3.00 - 3.32</td>
            <td className="border border-gray-300 p-2 text-right">71 - 74.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm '>
            <td className="border border-gray-300 p-2">B-</td>
            <td className="border border-gray-300 p-2">2.66 - 2.99</td>
            <td className="border border-gray-300 p-2 text-right">68 - 70.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm bg-[#F4F5F8]'>
            <td className="border border-gray-300 p-2">C</td>
            <td className="border border-gray-300 p-2"> 2.00 - 2.65 </td>
            <td className="border border-gray-300 p-2 text-right">61 - 67.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm'>
            <td className="border border-gray-300 p-2">D</td>
            <td className="border border-gray-300 p-2"> 1.00 - 1.99 </td>
            <td className="border border-gray-300 p-2 text-right">50 - 60.99</td>
          </tr>
          <tr  className='text-gray-700 text-sm bg-[#F4F5F8]'>
            <td className="border border-gray-300 p-2">F</td>
            <td className="border border-gray-300 p-2"> 0.00 </td>
            <td className="border border-gray-300 p-2 text-right">Below 50</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GradingScheme
