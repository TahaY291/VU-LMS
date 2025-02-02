import React, { useState, useContext } from 'react'
import courses from "../data"
import leftArrow from '../assets/left.svg'
import rightArrow from '../assets/right.svg'
import dots3 from '../assets/dots3.svg'
import message from '../assets/message.svg'
import UserContext from '../context/UserContext'
import { FaPhotoVideo } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { FaCaretUp } from "react-icons/fa";

function VideoSection() {
  const [reading, setReading] = useState('video')
  const { user, courseName} = useContext(UserContext)
  const [lectures, setLectures] = useState(user)
  const [titles, setTitles] = useState(lectures.map(item => (item.heading)))
  const [currentSlide, setCurrentSlide] = useState(0)  
  const [dots, setDots] = useState(false)

  return (
    <div className='font-["Roboto"] w-[100%] px-2 py'>
      <div className='mt-5 mb-2 w-fit'>
        <Link to="/">
        <h2 className='underline text-[21px] tracking-wide font-[500] w-fit text-[#5876dd] hover:text-[#0C008B]'>{courseName}</h2>
        </Link>
      </div>
      <div className='bg-white shadow'>
        <div className='w-[100%] bg-[#774FD6] flex px-8 text-white items-center justify-between py-4'>
          <p>Lesson {currentSlide + 1}: {lectures[currentSlide].heading}</p>
          <div className='flex items-center justify-center gap-3'>
            <div className='flex items-center gap-1'>
              <div onClick={() => setCurrentSlide(prev => prev !== 0 ? prev - 1 : prev)} className='bg-white rounded-full cursor-pointer hover:bg-[#804fd6] '>
                <MdOutlineKeyboardArrowLeft className='size-8 text-gray-600 hover:text-white' />
              </div>
              <div onClick={() => setCurrentSlide(prev => prev < lectures.length - 1 ? prev + 1 : prev)} className='bg-white rounded-full cursor-pointer hover:bg-[#804fd6]'>
                <MdChevronRight className='size-8 text-gray-600 hover:text-white' />
              </div>
            </div>
            <div className='relative' onClick={()=>setDots(true)} onMouseLeave={()=> setDots(false)}>
              <div className='bg-white rounded-full cursor-pointer text-gray-600 p-[6px] hover:bg-[#804fd6] hover:text-white '>
                <BiDotsHorizontalRounded className='size-5 hover:text-white' />
              </div>
              {dots && <div className={`absolute top-11 w-[350px] bg-white -right-3  px-3 py-5 h-[300px] z-50  rounded-sm ${dots ? "" : "hidden"}`}>
              <FaCaretUp  className='size-10 text-white absolute right-2 -top-[27px]' />
                <ul className='h-[100%] overflow-y-auto scrollbar-videoSection '>
                  {titles.map((title,index )=> (
                    <li key={index} className='cursor-pointer py-1' onClick={()=>setCurrentSlide(index)}>
                      <p className='text-[#c1bfd0] hover:text-gray-500  text-[1rem] tracking-wide'><span className='text-[1.2rem] font-[400] pr-4'>{index + 1}</span>{title}</p>
                    </li>
                  ))}
                </ul>
              </div>}
            </div>
          </div>
        </div>
        <div className='px-3 py-4'>
          <div className='px-[1px] flex gap-1 text-gray-500'>
            <button onClick={() => setReading("video")} className={`${reading === "video" ? "bg-[#774FD6] text-white active:bg-[#774FD6] active:text-white " : "active:bg-[#774FD6] active:text-white hover:text-black"} rounded-t-sm px-4 py-1 hover:border-[1px] border-gray-400 h-10 flex items-center justify-center gap-2`}> <FaPhotoVideo /> Video</button>
            <button onClick={() => setReading("reading")} className={`${reading === "reading" ? "bg-[#774FD6] text-white active:bg-[#774FD6] active:text-white " : "active:bg-[#774FD6] active:text-white hover:text-black"} rounded-t-sm px-4 py-1 hover:border-[1px] border-gray-400 h-10 flex items-center justify-center gap-2`}> <FaBook /> Reading</button>
          </div>
          {reading === "video" ? <div className='border-[1px] border-gray-500 bg-black rounded-sm w-full h-[70vh ]'>
            <video className='h-[70vh] w-full' controls autoPlay={true} src={lectures[currentSlide].video}></video>
          </div> : <div className='border-[1px] border-gray-500 bg-white  rounded-sm w-full min-h-[70vh] px-4 py-2'>
            <h1 className='text-lg font-bold my-5'>{lectures[currentSlide].heading}</h1>
            <p className='text-left w-[75vw] pl-10'>
              {lectures[currentSlide].reading}
            </p>
          </div>}
        </div>
      </div>
      <hr className='py-5' />
      <div className='px-3'>
        <div>
          <div className='flex items-center py-3 gap-3'>
            <TbMessage className='size-8 font-thin' />
            <h2 className='text-xl text-[#716aca] font-[500] text-[#384AD7'>

              Moderate Discussion Board
              <span className='text-sm'> ( {lectures[currentSlide].questions.length + " " + "QUESTIONS"} ) </span>
            </h2>
          </div>
          {lectures !== 0 && lectures[currentSlide].questions.map((item, index) => (
            <div key={index} className='bg-[#F2F3F5]'>
              <div className='border-2 rounded-lg p-2'>
                <strong className='text-blue-900'>👨‍🎓 BC12345678</strong>
                <p className='pl-4 pr-2 pb-5'>{item.question}</p>
                <hr />
                <div className='border-2 rounded-lg p-2 mt-3 bg-green-50'>
                  <strong className='text-green-700'>👨‍🎓 BC12345678</strong>
                  <p className='pl-4 pr-2 pb-5'>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default VideoSection
