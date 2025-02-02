import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';

function Assignment() {
    const {user, courseName} = useContext(UserContext)
    const [first, setfirst] = useState(user) 

    return (
        <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
            <div className='mb-5 w-fit'>
            <Link to="/">
                    <h2 className='underline text-[21px] tracking-wide font-[500] w-fit text-[#5876dd] hover:text-[#0C008B]'>{courseName}</h2>
                </Link>
            </div>
            <div className='bg-white'>
                <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
                    <h1 className="text-[21px] font-[500] ">Assignments</h1>
                    <p>&lt;Back</p>
                </div>
                <div className='px-7 py-3'>
                    <div className="overflow-auto ">
                        <table className="border-collapse w-full border calender border-gray-300 mt-4 font-['Poppins']">
                            <thead>
                                <tr className="bg-[#716ACA] text-white text-sm ">
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Sr.No</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Title</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Assignment</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Due Date</th>
                                    <th className="border border-gray-200  py-3 font-[400] ">Total Marks</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Submit</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Result</th>
                                    <th className="border border-gray-200 px-2 py-3 font-[400] ">Discuss</th>
                                </tr>
                            </thead>
                            <tbody>
                                {first.map((item, index) => (
                                    <tr key={index} className={`${index % 2 == 0 ? "bg-[#F4F5F8]" : ""} text-sm text-start align-top`}>
                                        <td className="border border-gray-200 p-2 pl-6 font-[300]">{item.SrNo}</td>
                                        <td className="border border-gray-200 p-2 font-[300] text-center align-top"  >{item.title}</td>
                                        <td className="border border-gray-200 p-2 font-[300]"><span className='text-[#2739c1] hover:underline cursor-pointer text-sm'>Assignment File</span></td>
                                        <td className="border border-gray-200 p-2 font-[300] text-red-500">{item.dueDate}</td>
                                        <td className="border border-gray-200 p-2 font-[300] text-[#800080]">{item.totalMarks}</td>
                                        <td className="border border-gray-200 p-2 font-[300] text-[#008000]">

                                            {'Submit'} <br />
                                            <p className='text-xs text-black'>
                                                Choose your file
                                            </p>

                                        </td>
                                        <td className="border border-gray-200 p-2">{item.result}</td>
                                        <td className="border border-gray-200 p-2">
                                            {item.status === 'Studied' ? (
                                                <span className="text-green-400">{item.status}</span>
                                            ) : (
                                                <span className="text-red-600">{item.status}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment
