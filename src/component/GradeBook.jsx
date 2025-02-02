import React,{useState} from 'react'
import StudentGrade from './GrdBkCom/StudentGrade'
import GradingScheme from './GrdBkCom/GradingScheme'
import MidtermResult from './GrdBkCom/MidtermResult'
import ProjectCGPA from './GrdBkCom/ProjectCGPA'
import COUM from './GrdBkCom/COUM'
import { PiStudentFill } from "react-icons/pi";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoCalculatorOutline } from "react-icons/io5";
import { FaRegIdCard } from "react-icons/fa";

function GradeBook() {
  const [slides, setSlides] = useState("comp1")
  return (
    <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
      <h1 className="text-[21px] font-[500] py-5 pb-8">Grade Book</h1>
      <div className='bg-white p-5'>

      <div>
        <div className='flex flex-wrap gap-1'>
          <button onClick={()=> setSlides("comp1")} className={`${slides === "comp1" ? "bg-[#716ACA] text-white" : "text-gray-500"} flex items-center justify-center gap-3 hover:border-[1px] hover:border-b-0 w-fit border-[1px] border-[#F2F3F8] hover:border-gray-300 px-3 py-2 rounded-t-md text-xs tracking-wide font-[400]`}><PiStudentFill className={`size-5 ${slides === "comp1" ? "text-white" : "text-yellow-700"} `} /><p >Student Grade Book</p></button>
          <button onClick={()=> setSlides("comp2")} className={`${slides === "comp2" ? "bg-[#716ACA] text-white" : "text-gray-500"} flex items-center justify-center gap-3 hover:border-[1px] hover:border-b-0 w-fit border-[1px] border-[#F2F3F8] hover:border-gray-300 px-3 py-2 rounded-t-md text-xs tracking-wide font-[400]`}><FaRegClipboard className={`size-5 ${slides === "comp2" ? "text-white" : "text-blue-700"} `} /><p >Midterm Result (FALL 2024)</p></button>
          <button onClick={()=> setSlides("comp3")} className={`${slides === "comp3" ? "bg-[#716ACA] text-white" : "text-gray-500"} flex items-center justify-center gap-3 hover:border-[1px] hover:border-b-0 w-fit border-[1px] border-[#F2F3F8] hover:border-gray-300 px-3 py-2 rounded-t-md text-xs tracking-wide font-[400]`}><MdOutlineMenuBook className={`size-5 ${slides === "comp3" ? "text-white" : "text-green-500"} `} /><p >Grading Scheme</p></button>
          <button onClick={()=> setSlides("comp4")} className={`${slides === "comp4" ? "bg-[#716ACA] text-white" : "text-gray-500"} flex items-center justify-center gap-3 hover:border-[1px] hover:border-b-0 w-fit border-[1px] border-[#F2F3F8] hover:border-gray-300 px-3 py-2 rounded-t-md text-xs tracking-wide font-[400]`}><IoCalculatorOutline className={`size-5 ${slides === "comp4" ? "text-white" : "text-red-900"} `} /><p  >Projected CGPA Calculator</p></button>
          <button onClick={()=> setSlides("comp5")} className={`${slides === "comp5" ? "bg-[#716ACA] text-white" : "text-gray-500"} flex items-center justify-center gap-3 hover:border-[1px] hover:border-b-0 w-fit border-[1px] border-[#F2F3F8] hover:border-gray-300 px-3 py-2 rounded-t-md text-xs tracking-wide font-[400]`}><FaRegIdCard  className={`size-5 ${slides === "comp5" ? "text-white" : "text-pink-700"} `} /><p >COUM/DAC</p></button>
        </div>
      </div>
      <div className='border-[1px]  border-gray-400'>
      {
        slides === "comp1" ? <StudentGrade /> : slides === "comp2" ? <MidtermResult/>: slides === "comp3" ? <GradingScheme/> : slides === "comp4" ?
        <ProjectCGPA/> : slides === "comp5" ? <COUM/> : null
      }
      </div>
    </div>
      </div>
  )
}

export default GradeBook
