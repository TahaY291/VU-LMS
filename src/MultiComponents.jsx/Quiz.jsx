import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';

function Quiz() {
    const { user, courseName } = useContext(UserContext)
    const [first, setfirst] = useState(user)
    return (
        <div>
            <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
                <div className='mb-5 w-fit'>
                <Link to="/">
                    <h2 className='underline text-[21px] tracking-wide font-[500] w-fit text-[#5876dd] hover:text-[#0C008B]'>{courseName}</h2>
                </Link>
                </div>
                <div className='bg-white'>
                    <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
                        <h1 className="text-[21px] font-[500] ">Quiz</h1>
                        <p>&lt;Back</p>
                    </div>
                    <div className='px-7 py-3'>
                        <div className="overflow-auto ">
                            <table className="border-collapse w-full border calender border-gray-300 mt-4 font-['Poppins']">
                                <thead>
                                    <tr className="bg-[#716ACA] text-white text-sm ">
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">#</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Quiz Title</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Reading Dependencies</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Start Date</th>
                                        <th className="border border-gray-200  py-3 font-[400] ">Due Date</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Total Marks</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Quiz Status</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Submit Status</th>
                                        <th className="border border-gray-200 px-2 py-3 font-[400] ">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {first.map((item, index) => (
                                        <tr key={index} className={`${index % 2 == 0 ? "bg-[#F4F5F8]" : ""} text-sm text-start align-top`}>
                                            <td className="border border-gray-200 p-2 pl-6 font-[300] py-4">{item.no}</td>
                                            <td className="border border-gray-200 p-2 font-[300] text-center align-top"  >{item.quizTitle}</td>
                                            <td className="border border-gray-200 p-2 font-[300]">{item.readingDependency}</td>
                                            <td className="border border-gray-200 p-2 font-[300] text-emerald-600">{item.startDate}</td>
                                            <td className="border border-gray-200 p-2 font-[300] text-red-500">{item.dueDate}</td>
                                            <td className={` border border-gray-200 p-2 font-[300]`}>{item.totalMarks}</td>
                                            <td className={` ${item.quizStatus === "Open" ? "text-emerald-600" : "text-red-500"} border border-gray-200 p-2 font-[300] `}>{item.quizStatus}</td>
                                            <td className={` ${item.submitStatus === "Submitted" ? "text-emerald-600" : "text-red-500"} border border-gray-200 p-2 font-[300] `}>{item.submitStatus}</td>
                                            <td className="border border-gray-200 p-2">{item.result}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='py-4'>
                            <h1 className='py-6 pb-8 text-[#ff0033] text-[15px] font-extrabold tracking-wide '>
                                Note: To take Quiz in Chrome browser, It is mandatory to Install/Enable <span className='text-[#0000ff]'> VU Quiz Firewall </span>  Extension.
                            </h1>
                            <h1 className='text-[#0000ff] text-[15px] font-extrabold'>Unfair Means Regulations</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz
