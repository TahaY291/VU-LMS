import React,{useContext} from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiSealQuestionThin } from "react-icons/pi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { Link } from 'react-router-dom';
import userContext from '../context/UserContext.js'


function Course({course}) {
    const {setUser , setCourseName} = useContext(userContext)
    const handleClick=()=> {
        setUser(course.lectures)
        setCourseName(course.title)
    }
    const handleAssignmentData = ()=>{
        setUser(course.assignments)
        setCourseName(course.title)
    }
    const handleQuizzesData = ()=>{
        setUser(course.quizzes)
        setCourseName(course.title)
    }
    const handleAnnouncementsData = ()=>{
        setUser(course.announcements)
        setCourseName(course.title)
    }
    
  return (
    <div className='font-["Roboto"] shadow-xl avoid-break mb-5 course-shadow'>
        <div className='bg-img-course-bar text-white px-4 py-2 '>
            <h3 className='font-bold'>{course.title}</h3>
            <p className='text-sm'>{course.heading}</p>
            <p className='text-xs'>{course.creditHours} Credit Hour(s)</p>
        </div>
        <div className='p-5'>
            <div className='flex justify-between px-5 py-5'>
                <div className='flex gap-10 items-center'>
                    <img className='w-24 border-[1px] border-gray-400 rounded-lg' src="https://vulms.vu.edu.pk/App_Themes/Default/Images/new/Avatar_male.PNG" alt="" />
                    <div>
                        <p className='text-xs font-bold'>{course.teacher.name}</p>
                        <p className='text-xs'>{course.teacher.education}</p>
                        <p className='text-xs'>{course.teacher.university}</p>
                    </div>
                </div>
                <div>
                    <Link to="/videoSection">
                    <div onClick={handleClick} className='border-2 border-[#53A4F7] rounded-3xl px-4 text-[#53A4F7] text-xl hover:text-white hover:bg-[#53A4F7] duration-500 cursor-pointer shadow-[#53A4F7] number-sh'>
                        {course.lectures.length}
                    </div>
                    </Link>
                </div>
            </div>
            <hr />
            <div className='flex items-center gap-10 py-5 px-5 flex-wrap'>
                <Link to="/assignmentsection">
                <div onClick={handleAssignmentData} className='flex items-center flex-col gap-1 cursor-pointer'>
                    <FaBookOpenReader className='size-10 hover:opacity-70 hover:scale-110 duration-300' />
                    <p className='text-xs'>Assignment</p>
                </div>
                </Link>
                <Link to="/gdb">
                <div className='flex items-center flex-col gap-1'>
                    <FaPeopleRoof className='size-10 hover:opacity-70 hover:scale-110 duration-300' />
                    <p className='text-xs'>GDB</p>
                </div>
                </Link>
                <Link to="quiz">
                <div onClick={handleQuizzesData} className='flex items-center flex-col gap-1 cursor-pointer'>
                    <PiSealQuestionThin className='size-10 hover:opacity-70 hover:scale-110 duration-300' />
                    <p className='text-xs'>Quiz</p>
                </div>
                </Link>
                <div disabled={true} className='flex items-center flex-col gap-1 opacity-50 cursor-not-allowed'>
                    <FaArrowsDownToPeople className='size-10 hover:opacity-70 hover:scale-110 duration-300' />
                    <p className='text-xs'>Activity</p>
                </div>
                <Link to="/announcements">
                <div onClick={handleAnnouncementsData} className='flex items-center flex-col gap-1'>
                <HiSpeakerphone className='size-10 hover:opacity-70 hover:scale-110 duration-300' />
                    <p className='text-xs'>Announcements</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Course
