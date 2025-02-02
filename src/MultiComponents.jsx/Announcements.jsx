import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Announcements = () => {
    const { user, courseName } = useContext(UserContext);
    const [first, setFirst] = useState(user.toSpliced(user.length / 2));
    const [second, setSecond] = useState(user);
    const [expandedId, setExpandedId] = useState(null);
    const [load, setLoad] = useState(false)
    const [announcements, setAnnouncements] = useState("");
    const [hideBtn, setHideBtn] = useState(false);


    function handleSearch(data) {
        if (announcements.length > 0) {
            data = data.filter(l => (l.title.toLowerCase().match(announcements)))
            if (data.length > 0) {
                setFirst(data)
                setSecond(data)
                setHideBtn(true)
            }
        }

    }
    function handleSecond() {
        handleSearch(second)
        if (handleSearch) {
            setSecond(user)
            setLoad(false)
        }
    }
    function handleRefresh() {
        setFirst(user.toSpliced(user.length / 2));
        setSecond(user);
        setLoad(false)
        setHideBtn(false)
    }

    function handleClickOnLoad() {
        setLoad(true)
    }


    function handleToggle(id) {
        setExpandedId((prevId) => (prevId === id ? null : id));
    }
    return (
        <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
            <div className='mb-5 w-fit'>
                <Link to="/">
                    <h2 className='underline text-[21px] tracking-wide font-[500] w-fit text-[#5876dd] hover:text-[#0C008B]'>{courseName}</h2>
                </Link>
            </div>
            <div className='bg-white pb-3 bl-shadow'>
                <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
                    <h1 className="text-[21px] font-[500] ">Assignments</h1>
                    <p>&lt;Back</p>
                </div>
                <div className='flex items-center justify-center   p-5 gap-5'>
                    <div className='flex'>
                        <input className='px-4 py-2 w-[40vw] max-lg:w-full outline-none border-black border focus:border-[#764ED5]' value={announcements} onChange={(e) => setAnnouncements(e.target.value)} maxLength={150} type="text" placeholder='Search in announcement title' />
                        <button onClick={() => handleSecond()} className='px-3  py-2 bg-[#764ED5] text-white rounded-e-md' ><IoIosSearch className='size-6' /></button>
                    </div>
                    <button onClick={handleRefresh} className='px-4  py-2 bg-[#764ED5] text-white rounded' >Refresh</button>

                </div>
                <div className="px-7 py-3 flex flex-col gap-4">
                    {(load ? second : first).map((item, index) => (
                        <article key={index} className="">
                            <div className='cursor-pointer text-[14px] font-["Poppins"] flex items-center justify-between w-full px-4 py-2 bg-[#EBEDF2] gap-5 rounded-lg' onClick={() => handleToggle(item.id)}>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img className='w-8' src={expandedId !== item.id ? "https://vulms.vu.edu.pk/App_Themes/Default/Images/annnoucment-icon-close.png" : "https://vulms.vu.edu.pk/App_Themes/Default/Images/annnoucment-icon-open.png"} alt="" />
                                    </div>
                                    <h4 >  {item.title}</h4>
                                </div>
                                <p className='text-[#2c2e3e] flex items-center gap-1'> <img className='w-8' src="https://vulms.vu.edu.pk/App_Themes/Default/Images/date.png" alt="" /> {item.date}</p>
                            </div>
                            <div className={`${expandedId === item.id ? "px-8 border-x-[1px] border-gray-300 border-b-[1px] py-3" : ""} `}>
                                {expandedId === item.id && <p className=''>{item.explanation} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolore distinctio tenetur voluptatibus maiores vero officia. Sit tempore illum impedit facere, ex cumque eaque voluptatibus optio laboriosam reiciendis dolorem commodi. Illum delectus quod at optio alias aperiam velit ad dolore nemo quo labore atque, natus eius eligendi quidem nisi magni!</p>}
                            </div>
                        </article>
                    ))}
                </div>
                {!hideBtn && <button onClick={handleClickOnLoad} className={` ${load ? "hidden" : "block"} bg-[#764ED5] text-white px-4 p-2 ml-7 rounded`}>Load More</button>}

            </div>
        </div>
    )
}

export default Announcements
