import React from "react";
import studiedCourses from "../array/studiedCourses";

function MyStudyCourses() {
  return (
    <div className="bg-[#F2F3F8] px-8 py-4 font-['Roboto']  ">
      <h1 className="text-[21px] font-[500] py-5 pb-8">My Studied Courses</h1>
      <div className="columns-2 gap-5 max-lg:flex max-lg:flex-wrap">
        {console.log(studiedCourses[0].courses)}
        {studiedCourses[0].courses.map((course , index)=> (
                  <div key={index} className="flex flex-col  avoid-break w-full bg-white mb-5 shadow-lg ">
                  <div className="bg-[#6D45CE] text-white px-6 py-2 ">
                    <h3 className="font-bold text-[18.2px]">{course.code}- {course.title}</h3>
                    <p className="text-sm">{course.title}</p>
                    <p className="text-xs">{course.crHrs} Credit Hour(s)</p>
                  </div>
                  <div className='flex justify-between px-5 py-5'>
                        <div className='flex gap-20 items-start'>
                          <div className="p-1 border rounded-lg">
                            <img className='w-24 h-36 border-[1px] border-gray-400 rounded-lg' src="https://vulms.vu.edu.pk/App_Themes/Default/Images/new/Avatar_male.PNG" alt="" />
                          </div>
                            <div className="pt-2">
                                <p className='text-xs font-bold'>{course.teacherName}</p>
                                <p className='text-xs'>{course.teacherGrad}</p>
                                <p className='text-xs'>{course.teacherUni}</p>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
      </div>
    </div>
  );
}

export default MyStudyCourses;
