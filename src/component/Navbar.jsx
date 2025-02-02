import React,{useState} from 'react'
import alarm from '../assets/alarm.gif'


function Navbar() {
  const [showAside, setShowAside] = useState(false)
  return (
    <div className='font-["Roboto"] flex items-center justify-between px-4 py-2 shadow-lg max-md:justify-end'>
      <div className='flex items-center gap-5 max-md:hidden '>
          <img className='w-20' src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/logo-New.png" alt="" />
          <h1 className='text-2xl pt-3'>Learning Management System</h1>
      </div>
      <div className='flex items-center gap-4 '>
        <img className='size-10' src={alarm} alt="" />
        <div>
        <p>Student's Name</p>
        <p>(bc12345678)</p>
        </div>
        <div className="relative">
  <img
    onClick={()=> setShowAside(prev => !prev)}
    src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-men-cartoon-id-photo-png-image_7262523.png"
    alt="User Avatar"
    className="w-12 h-12 rounded-full cursor-pointer"
  />


  <div
    className={`${showAside ? "absolute w-fit right-2 mt-2 pb-2  bg-white border border-gray-200 rounded-lg shadow-lg" : "hidden absolute right-0 mt-2  pb-2 w-fit bg-white border border-gray-200 rounded-lg shadow-lg"}`}
  >
    <div className='clip-path -z-10 absolute right-1 -top-2'>
    </div>

    <div className="flex items-center bg-purple-700 text-white p-4 w-full rounded-t-sm text-center">
    <img
    onClick={()=> setShowAside(prev => !prev)}
    src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-men-cartoon-id-photo-png-image_7262523.png"
    alt="User Avatar"
    className="w-14 h-14 rounded-full cursor-pointer"
  />
  <div>
      <strong className="block">STUDENT NAME</strong>
      <p className="text-sm">Software Engineering</p>
  </div>
    </div>

    <ul className="">
      <li className='w-60'>
        <a
          href="#"
          className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
        >
          My Profile
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
        >
          Change Password
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
        >
          My Logins History
        </a>
      </li>
      <li className='px-3'>
        <button
          className="block cursor-pointer px-4 py-2 text-sm border-2 rounded-full hover:bg-gray-100 text-gray-800"
        >
          Logout
        </button>
      </li>
    </ul>
  </div>
</div>
      </div>
    </div>
  )
}

export default Navbar
