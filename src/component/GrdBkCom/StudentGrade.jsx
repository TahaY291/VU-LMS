import React from "react";
const courseData = [
    {
        semester: "Spring 2024",
        code: "CS403",
        title: "Database Management Systems",
        gpa: 2.6,
        grade: "C",
        marks: 67.36,
        attendance: 60.6,
    },
    {
        semester: "Spring 2024",
        code: "CS403P",
        title: "Database Management Systems (Practical)",
        gpa: 2.27,
        grade: "C",
        marks: 63.86,
        attendance: null,
    },
    {
        semester: "Spring 2024",
        code: "CS504",
        title: "Software Engineering - I",
        gpa: 2.53,
        grade: "C",
        marks: 66.62,
        attendance: 66.43,
    },
    {
        semester: "Spring 2024",
        code: "CS604",
        title: "Operating Systems",
        gpa: 1.8,
        grade: "D",
        marks: 58.8,
        attendance: 31.97,
    },
    {
        semester: "Spring 2024",
        code: "CS604P",
        title: "Operating Systems (Practical)",
        gpa: 3.01,
        grade: "A",
        marks: 18.75,
        attendance: null,
    },
    {
        semester: "Spring 2024",
        code: "CS610",
        title: "Computer Networks",
        gpa: 2.93,
        grade: "B-",
        marks: 70.38,
        attendance: 61.54,
    },
    {
        semester: "Spring 2024",
        code: "CS610P",
        title: "Computer Networks (Practical)",
        gpa: 3.02,
        grade: "A",
        marks: 35.55,
        attendance: null,
    },
    {
        semester: "Spring 2024",
        code: "STA301",
        title: "Statistics and Probability",
        gpa: 1.5,
        grade: "D",
        marks: 55.5,
        attendance: 67.13,
    },
    {
        semester: "Fall 2023",
        code: "CS625",
        title: "Professional Practices",
        gpa: 4.0,
        grade: "A",
        marks: 85.0,
        attendance: 83.73,
    },
    {
        semester: "Fall 2023",
        code: "CS625",
        title: "Professional Practices",
        gpa: 4.0,
        grade: "A",
        marks: 85.0,
        attendance: 83.73,
    },
    {
        semester: "Fall 2023",
        code: "CS625",
        title: "Professional Practices",
        gpa: 4.0,
        grade: "A",
        marks: 85.0,
        attendance: 83.73,
    },
    {
        semester: "Fall 2023",
        code: "MGT201",
        title: "Financial Management",
        gpa: 1.8,
        grade: "D",
        marks: 58.8,
        attendance: 55.47,
    },
    {
        semester: "Fall 2023",
        code: "CS601",
        title: "Data Communication",
        gpa: 2.87,
        grade: "B-",
        marks: 69.85,
        attendance: 87.41,
    },
    {
        semester: "Fall 2023",
        code: "CS201P",
        title: "Introduction to Programming (Practical)",
        gpa: 2.53,
        grade: "C",
        marks: 66.62,
        attendance: null,
    },
    {
        semester: "Fall 2023",
        code: "CS201P",
        title: "Introduction to Programming (Practical)",
        gpa: 2.53,
        grade: "C",
        marks: 66.62,
        attendance: null,
    },
    {
        semester: "Fall 2023",
        code: "CS201P",
        title: "Introduction to Programming (Practical)",
        gpa: 2.53,
        grade: "C",
        marks: 66.62,
        attendance: null,
    },
    {
        semester: "Fall 2023",
        code: "CS301",
        title: "Data Structures",
        gpa: 3.87,
        grade: "A-",
        marks: 83.08,
        attendance: 95.45,
    },
    {
        semester: "Fall 2023",
        code: "CS301",
        title: "Data Structures",
        gpa: 3.87,
        grade: "A-",
        marks: 83.08,
        attendance: 95.45,
    },
    {
        semester: "Fall 2023",
        code: "CS301",
        title: "Data Structures",
        gpa: 3.87,
        grade: "A-",
        marks: 83.08,
        attendance: 95.45,
    },
    {
        semester: "Fall 2023",
        code: "CS301",
        title: "Data Structures",
        gpa: 3.87,
        grade: "A-",
        marks: 83.08,
        attendance: 95.45,
    },
    {
        semester: "Fall 2023",
        code: "CS304",
        title: "Object Oriented Programming",
        gpa: 3.53,
        grade: "B+",
        marks: 78.03,
        attendance: 86.49,
    },
    {
        semester: "Spring 2023",
        code: "CS201",
        title: "Introduction to Programming",
        gpa: 2.67,
        grade: "B-",
        marks: 68.08,
        attendance: null,
    },
    {
        semester: "Spring 2023",
        code: "ENG201",
        title: "Business and Technical English Writing",
        gpa: 3.8,
        grade: "A-",
        marks: 82.05,
        attendance: null,
    },
];

const StudentGrade = () => {


    function changeColor(string) {
        if (string === "A" || string === "A+" || string === "A-") {
            return "text-[#008000]"
        }else if(string === "B" || string === "B+" || string === "B-"){
            return "text-[#0000ff]"
        }else if(string === "C"){
            return "text-[#07c2c2]"
        }else if(string === "D"){
            return "text-[#a901ff]"
        }else if(string === "F"){
            return "text-red-600"
        }
    }

    return (
        <div className="grid gap-10 p-5 bg-white">
            <div className="bg-white flex max-md:flex-col w-full items-start pb-3 h-full">
                <div className="basis-[38%] max-md:w-full px-5 py-4 border-r-[1px] max-md:border-b-[1px] max-md:border-r-0 border-gray-300">
                    <div className="flex items-center justify-between border-b-2 py-2 border-dotted border-gray-300 ">
                        <div>
                            <h2 className="text-md font-[500]">Name</h2>
                            <p className="text-sm text-gray-400">S/O Student Father</p>
                        </div>
                        <h2 className="text-md font-[500] text-[#34bfa3]">Student Name</h2>
                    </div>
                    <div className="flex items-center justify-between border-b-2 py-2 border-dotted border-gray-300 ">
                        <div>
                            <h2 className="text-md font-[500]">Student ID</h2>
                            <p className="text-sm text-gray-400">022-VU-026838</p>
                        </div>
                        <h2 className="text-md font-[500] text-[#f4516c]">BC12345678 </h2>
                    </div>
                    <div className="flex items-start justify-between  py-2 ">
                        <div>
                            <h2 className="text-md font-[500]">Study Program</h2>
                            <p className="text-sm text-gray-400">
                                Bachelor of Science in Software <br /> Engineering (4 year
                                program)
                            </p>
                        </div>
                        <h2 className="text-md font-[500] text-[#36a3f7]">
                            Software Engineering
                        </h2>
                    </div>
                </div>
                <div className="basis-[30%] max-md:w-full px-5 py-4 border-r-[1px] max-md:border-b-[1px] max-md:border-r-0 border-gray-300">
                    <div className="flex items-center justify-between border-b-2 py-2 border-dotted border-gray-300">
                        <h2 className="text-lg  font-[500]">Total Credits Required</h2>
                        <h2 className="text-lg font-[500] text-[#34bfa3]">135</h2>
                    </div>
                    <div className="flex items-start justify-between border-b-2 py-2 border-dotted border-gray-300">
                        <div>
                            <h2 className="text-lg font-[500]">Total Credits Earned</h2>
                            <p className="text-sm text-gray-400">
                                27 studied course(s) = 67 credit(s)
                            </p>
                            <p className="text-sm text-gray-400">
                                0 exempted course(s) = 0 credit(s){" "}
                            </p>
                        </div>
                        <h2 className="text-md font-[500] text-[#36a3f7]">67</h2>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <h2 className="text-lg font-[500]">Remaining Credits</h2>
                        <h2 className="text-lg font-[500] text-[#f4516c]">68</h2>
                    </div>
                </div>
                <div className="basis-[30%] max-md:w-full  px-5 py-4">
                    <div className="py-6 max-sm:hidden"></div>
                    <div className="flex items-center  justify-between py-8">
                        <h2 className="text-lg font-[500]">CGPA</h2>
                        <h2 className="text-lg font-[500] text-[#34bfa3]">3.01/4.0</h2>
                    </div>
                </div>
            </div>
            <div className="w-full px-5 py-2 overflow-auto">
                <table className="w-full">
                    <thead className="bg-[#716ACA] text-white">
                        <tr className="text-[14px]">
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Semester
                            </th>
                            <th scope="col" className="font-[400] border border-gray-300 px-2 py-3">
                                Course
                            </th>
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Grade Point
                            </th>
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Grade
                            </th>
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Equivalent Percentage
                            </th>
                            <th
                                scope="col"
                                className="font-[400] border max-sm:hidden border-gray-300 px-2 py-3"
                            >
                                Attendance
                            </th>
                        </tr>
                    </thead>
                    <tbody className="max-sm:hidden">
                        {courseData.map((course, index) => (
                            <tr key={index} className="text-start hover:bg-gray-100 text-sm text-gray-700">
                                <td className="border border-gray-300 p-2">
                                    {course.semester}
                                </td>
                                <td className="border border-gray-300 p-2">{course.code}</td>
                                <td className="border border-gray-300 p-2">{course.title}</td>
                                <td className="border border-gray-300 p-2 text-[#34bfa3]">{course.gpa}</td>
                                <td className={ `${changeColor(course.grade)} border border-gray-300 p-2`}>{course.grade}</td>
                                <td className="border border-gray-300 p-2 text-[#36a3f7] text-right">{course.marks}</td>
                                    <td
                                        className={` border border-gray-300 p-2 text-[#ffb822] text-right`}
                                    >
                                        {course.attendance ? course.attendance : ""}
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody className="hidden max-md:block ">
                        {courseData.map((course, index) => (
                            <tr key={index} className="text-start hover:bg-gray-100">
                                <td className="border border-gray-300 p-2 ">{course.code}</td>
                                <td className="border border-gray-300 p-2 w-full">
                                    Grade: {course.grade}
                                    <br />
                                    GPA: {course.gpa}
                                    <br />
                                    Marks: {course.marks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentGrade;
