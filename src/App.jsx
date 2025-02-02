import { useContext } from 'react';
import './App.css';
import Main from './component/Main';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import AccountBook from './component/AccountBook';
import GradeBook from './component/GradeBook';
import ContactUs from './component/ContactUs';
import Help from './component/Help';
import LectureSchedule from './component/LectureSchedule';
import Notes from './component/Notes';
import MyStudyCourses from './component/MyStudyCourses';
import MyStudyScheme from './component/MyStudyScheme';
import Progress from './component/Progress';
import StudentServices from './component/StudentServices';
import ToDoCalender from './component/ToDoCalender';
import CourseSelection from './component/CourseSelection';
import { Routes, Route } from 'react-router-dom';
import VideoSection from './MultiComponents.jsx/VideoSection';
import UserContextProvider from './context/UserContext.jsx'
import UserContext  from './context/UserContext';
import Assignment from './MultiComponents.jsx/Assignment.jsx';
import GBD from './MultiComponents.jsx/GBD.jsx';
import Quiz from './MultiComponents.jsx/Quiz.jsx';
import Announcements from './MultiComponents.jsx/Announcements.jsx';

function App() {  
  return (
    <UserContextProvider>
      <MainApp />
    </UserContextProvider>
  );
}

function MainApp() {
  const {index, nav , setIndex} = useContext(UserContext)
  
  return (
    <div className='flex h-screen max-lg:flex-col overflow-hidden '>
      <Sidebar />
      <div className={`${index ? "max-lg:-z-40" : ""} w-full overflow-y-auto flex flex-col`}>
        <div className={`${nav ? "" : "max-lg:-translate-y-16"}`}>
        <Navbar />
        </div>
        <div className={`${nav ? "" : "max-lg:-translate-y-16 bg-[#F2F3F8] max-lg:duration-1000"} min-h-[90vh] main`} >
          {/* <Assignment /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/accountBook" element={<AccountBook />} />
          <Route path="/todoCalender" element={<ToDoCalender />} />
          <Route path="/gradeBook" element={<GradeBook />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/studentServices" element={<StudentServices />} />
          <Route path="/courseSelection" element={<CourseSelection />} />
          <Route path="/help" element={<Help />} />
          <Route path="/lectureSchedule" element={<LectureSchedule />} />
          <Route path="/myStudyCourses" element={<MyStudyCourses />} />
          <Route path="/myStudyScheme" element={<MyStudyScheme />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/videoSection" element={<VideoSection />} />
          <Route path="//assignmentsection" element={<Assignment />} />
          <Route path="//gdb" element={<GBD />} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/announcements" element={<Announcements/> } />

        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
