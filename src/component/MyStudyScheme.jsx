import React from "react";
import courseData from "../array/smester.js"; // Ensure this file is properly exported and structured.


function MyStudyScheme() {
  return (
    <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
        <h1 className="text-[21px] font-[500] py-5 pb-8">My Study Scheme</h1>
      <div className=" p-5 shadow-lg bg-white ">
        <div className="px-5 py-5 border-[1px] border-gray-400 overflow-auto bg-white">
          {/* Degree, Program, and Version Section */}
          <div className="px-4 pb-5 flex gap-5 max-lg:flex-col max-lg:items-center max-sm:text-md">
            <div className="flex items-center   justify-between border-r-[1px] max-lg:border-b-[1px] max-lg:w-full max-lg:pb-4 max-lg:border-r-0 border-gray-300  pr-4  w-[30%]">
              <h3 className="text-lg font-[500] max-sm:text-sm ">Degree</h3>
              <p className="font-bold text-xl max-sm:text-sm  text-green-300">BS</p>
            </div>
            <div className="flex items-center justify-between border-r-[1px] max-lg:w-full max-lg:pb-4 max-lg:border-b-[1px] max-lg:border-r-0 border-gray-300  pr-2 w-[34%]">
              <h3 className="text-lg  font-[500] max-sm:text-sm ">Program</h3>
              <p className="font-bold break-inside-avoid  max-sm:text-sm text-lg text-blue-300">
                Software Engineering
              </p>
            </div>
            <div className="flex items-center justify-between pl-4 py-3 max-lg:w-full max-lg:pb-2 max-lg:pl-0 w-[33%]">
              <h3 className="text-lg font-[500] max-sm:text-sm ">Version</h3>
              <p className="font-bold text-xl max-sm:text-sm  text-red-400">Fall 2022 (2204)</p>
            </div>
          </div>

          {/* Course Table */}
          <div className="overflow-auto">
            <table className="border-collapse w-full border calender border-gray-300 mt-4">
              <thead className="bg-[#716ACA] text-white">
                <tr >
                  <th className="border border-gray-300 px-2 py-3">Code</th>
                  <th className="border border-gray-300 px-2 py-3">Title</th>
                  <th className="border border-gray-300 px-2 py-3">Type</th>
                  <th className="border border-gray-300 px-2 py-3">Course Type</th>
                  <th className="border border-gray-300 px-2 py-3">Cr.Hrs</th>
                  <th className="border border-gray-300 px-2 py-3">Group</th>
                  <th className="border border-gray-300 px-2 py-3">Specialization</th>
                  <th className="border border-gray-300 px-2 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 1
                  </td>
                </tr>
                {courseData[0].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 2
                  </td>
                </tr>
                {courseData[1].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 3
                  </td>
                </tr>
                {courseData[2].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 4
                  </td>
                </tr>
                {courseData[3].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 5
                  </td>
                </tr>
                {courseData[4].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 6
                  </td>
                </tr>
                {courseData[5].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 7
                  </td>
                </tr>
                {courseData[6].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-bold text-center p-2">
                    Semester 8
                  </td>
                </tr>
                {courseData[7].courses.map((course, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.title}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.type}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {"Regular"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.creditHours}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.group}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {course.specialization}
                    </td>
                    <td className={`${course.status === "Studied" ? "text-green-400" : "text-red-600"} border  border-gray-300 p-2`}>
                      {course.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStudyScheme;
