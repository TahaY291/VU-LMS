import React, { useState, useContext, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { GrSchedules } from "react-icons/gr";
import { AiOutlineDropbox } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext.js";

function Sidebar() {
    const { setIndex, setNav } = useContext(UserContext);

    const [sidBar, setSidBar] = useState(false);
    const [mdSidBar, setMdSidBar] = useState(false);

    const handleClick = () => {
        setIndex(!mdSidBar);
        sidebarSet();
    };
    function sidebarSet() {
        setMdSidBar((prev) => !prev);
        setSidBar(false);
    }
    function closePlayer() {
        sidebarSet();
        setIndex(false);
    }

    return (
        <>
            <div className="lg:hidden flex bg-[#282A3C]  items-center justify-between py-3 px-4 text-white w-1/4 max-lg:w-full max-lg:h-16">
                <div>
                    <img
                        src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/logo_default_dark.png"
                        alt=""
                    />
                </div>
                <div className="flex items-center">
                    <FaBars
                        onClick={handleClick}
                        className="text-[#555368] cursor-pointer size-6 mr-4"
                    />
                    <HiDotsVertical
                        onClick={() => setNav((prev) => !prev)}
                        className="text-[#555368] cursor-pointer size-6 mr-4"
                    />
                </div>
            </div>

            <div
                className={
                    mdSidBar
                        ? "bg-[#2C2E3E] h-screen w-fit max-lg:fixed max-lg:translate-x-[0]"
                        : "bg-[#2C2E3E] h-screen w-fit max-lg:fixed max-lg:translate-x-[-100%]"
                }
            >
                <div className="flex items-center gap-4 max-lg:hidden">
                    <div
                        className={`${sidBar
                                ? "hidden px-8 py-2 my-2 gap-1 items-center justify-center"
                                : "flex  px-8 py-2 my-2 gap-1 items-center justify-center"
                            }`}
                    >
                        <img
                            className="bg-white"
                            src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/VU_Logo_t55.png"
                            alt=""
                        />
                        <img
                            className="bg-white"
                            src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/logo_govt_of_pakistan_t55.png"
                            alt=""
                        />
                    </div>
                    <div className={`${sidBar ? "pl-8 py-3" : ""}`}>
                        <FaBars
                            onClick={() => setSidBar((prev) => !prev)}
                            className={`${sidBar ? " mt-4" : ""
                                } text-[#555368]  cursor-pointer size-6 mr-4`}
                        />
                    </div>
                </div>
                <div className={`${sidBar ? "removeSideBar mt-5" : ""} `}>
                    <div className="lg:hidden flex justify-end p-2 cursor-pointer ">
                        <div className="border-[1px] border-[#ffffff52] border-dotted w-fit rounded">
                            <RxCross2
                                onClick={() => handleClick()}
                                className="size-6 text-[#ffffff52]"
                            />
                        </div>
                    </div>
                    {/* <ul className='design-scroll overflow-y-scroll h-[80vh] max-lg:h-full' >
                    <NavLink onClick={closePlayer} to='/' className={({ isActive  }) => isActive ? "" : ""}>  
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3 '>
                        <IoHome className='size-4' />
                        <p className='font-["Roboto"]'>Home</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/todoCalender'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <AiOutlineBars className='size-5' />
                        <p className='font-["Roboto"]'>To Do Calender</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/gradeBook'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <GiUpgrade className='size-4' />
                        <p className='font-["Roboto"]'>Grade Book</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/accountBook'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <HiAdjustmentsHorizontal className='size-5' />
                        <p className='font-["Roboto"]'>Account Book</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/progress'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <GiProgression className='size-5' />
                        <p className='font-["Roboto"]'>Progress</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/lectureSchedule'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <RiCalendarScheduleFill className='size-5' />
                        <p className='font-["Roboto"]'>Lecture Schedule</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='https://www.vu.edu.pk/contact' target='blank'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <IoMail className='size-5' />
                        <p className='font-["Roboto"]'>Mail</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/notes'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <LuListTodo className='size-5' />
                        <p className='font-["Roboto"]'>Notes</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/myStudyScheme'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <GrSchedules className='size-4' />
                        <p className='font-["Roboto"]'>My study Scheme</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/myStudyCourses'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <AiOutlineDropbox className='size-5' />
                        <p className='font-["Roboto"]'>My study Courses</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/studentServices'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <HiOutlineShoppingBag className='size-5' />
                        <p className='font-["Roboto"]'>Student Services</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='/courseSelection'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <FaRegCalendarCheck className='size-5' />
                        <p className='font-["Roboto"]'>Courses Selection</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='https://www.vu.edu.pk/contact' target='blank'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <FaPhone className='size-4' />
                        <p className='font-["Roboto"]'>Contact Us</p>
                    </li>
                    </NavLink>
                    <NavLink onClick={closePlayer} to='https://www.vu.edu.pk/contact' target='blank'>
                    <li className='w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700  cursor-pointer text-white px-8 py-3'>
                        <IoMdHelp className='size-5' />
                        <p className='font-["Roboto"]'>Help</p>
                    </li>
                    </NavLink>
                </ul> */}
                    <ul className="design-scroll overflow-y-scroll h-[80vh] max-lg:h-full">
                        {[
                            { to: "/", icon: <IoHome className="size-4" />, label: "Home" },
                            {
                                to: "/todoCalender",
                                icon: <AiOutlineBars className="size-5" />,
                                label: "To Do Calendar",
                            },
                            {
                                to: "/gradeBook",
                                icon: <GiUpgrade className="size-4" />,
                                label: "Grade Book",
                            },
                            {
                                to: "/accountBook",
                                icon: <HiAdjustmentsHorizontal className="size-5" />,
                                label: "Account Book",
                            },
                            {
                                to: "/progress",
                                icon: <GiProgression className="size-5" />,
                                label: "Progress",
                            },
                            {
                                to: "/lectureSchedule",
                                icon: <RiCalendarScheduleFill className="size-5" />,
                                label: "Lecture Schedule",
                            },
                            {
                                to: "https://www.vu.edu.pk/contact",
                                icon: <IoMail className="size-5" />,
                                label: "Mail",
                                external: true,
                            },
                            {
                                to: "/notes",
                                icon: <LuListTodo className="size-5" />,
                                label: "Notes",
                            },
                            {
                                to: "/myStudyScheme",
                                icon: <GrSchedules className="size-4" />,
                                label: "My Study Scheme",
                            },
                            {
                                to: "/myStudyCourses",
                                icon: <AiOutlineDropbox className="size-5" />,
                                label: "My Study Courses",
                            },
                            {
                                to: "/studentServices",
                                icon: <HiOutlineShoppingBag className="size-5" />,
                                label: "Student Services",
                            },
                            {
                                to: "/courseSelection",
                                icon: <FaRegCalendarCheck className="size-5" />,
                                label: "Courses Selection",
                            },
                            {
                                to: "https://www.vu.edu.pk/contact",
                                icon: <FaPhone className="size-4" />,
                                label: "Contact Us",
                                external: true,
                            },
                            {
                                to: "https://www.vu.edu.pk/contact",
                                icon: <IoMdHelp className="size-5" />,
                                label: "Help",
                                external: true,
                            },
                        ].map(({ to, icon, label, external }, index) =>
                            external ? (
                                <a
                                    key={index}
                                    href={to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li className="w-full text-sm flex gap-5 hover:bg-[#ffffff52] duration-700 cursor-pointer text-white px-8 py-3">
                                        {icon}
                                        <p className='font-["Roboto"]'>{label}</p>
                                    </li>
                                </a>
                            ) : (
                                <NavLink
                                    key={index}
                                    onClick={closePlayer}
                                    to={to}
                                    className={({ isActive }) =>
                                        `w-full text-sm flex gap-5 cursor-pointer text-white px-8 py-3 duration-700 
          ${isActive ? "bg-[#ffffff52] font-bold" : "hover:bg-[#ffffff52]"}`
                                    }
                                >
                                    <li className="flex items-center gap-5">
                                        {icon} <p className='font-["Roboto"]'>{label}</p>
                                    </li>
                                </NavLink>
                            )
                        )}
                    </ul>
                </div>
                <div
                    className={`${sidBar
                            ? "last"
                            : "flex leading-none w-[250px] pt-2 px-8 font-semibold  items-center justify-center gap-4 max-lg:hidden"
                        }`}
                >
                    <a target="blank" href="https://www.vu.edu.pk/">
                        <p className="leading-none text-sm text-white">
                            virtual university of Pakistan
                        </p>
                        <span className="leading-none text-xs text-[limegreen]">
                            Federal Government University
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
