import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  // January 2025
  {
    title: 'CS610P: Quiz no 3 (Graded Quiz)',
    start: new Date(2025, 0, 1),
    end: new Date(2025, 0, 5),
    allDay: true,
    resource: { type: 'Quiz', color: '#4FA75B' },
  },
  {
    title: 'CS610P: GDB Session',
    start: new Date(2025, 0, 7),
    end: new Date(2025, 0, 9),
    allDay: true,
    resource: { type: 'GDB', color: '#EE9B1F' },
  },
  {
    title: 'CS610P: Pending Fee Deadline',
    start: new Date(2025, 0, 11),
    end: new Date(2025, 0, 14),
    allDay: true,
    resource: { type: 'Fee', color: '#B833FF' },
  },

  // February 2025
  {
    title: 'CS202: Assignment #3',
    start: new Date(2025, 1, 5),
    end: new Date(2025, 1, 8),
    allDay: true,
    resource: { type: 'Assignment', color: '#E96853' },
  },
  {
    title: 'CS301: Midterm Preparation',
    start: new Date(2025, 1, 15),
    end: new Date(2025, 1, 20),
    allDay: true,
    resource: { type: 'Preparation', color: '#5D3FD3' },
  },
  {
    title: 'CS401: Online Workshop',
    start: new Date(2025, 1, 25),
    end: new Date(2025, 1, 27),
    allDay: true,
    resource: { type: 'Workshop', color: '#33A2FF' },
  },

  // March 2025
  {
    title: 'CS101: Midterm Exam',
    start: new Date(2025, 2, 10),
    end: new Date(2025, 2, 12),
    allDay: true,
    resource: { type: 'Exam', color: '#D9534F' },
  },
  {
    title: 'CS302: Lab Submission',
    start: new Date(2025, 2, 18),
    end: new Date(2025, 2, 20),
    allDay: true,
    resource: { type: 'Lab', color: '#A83279' },
  },
  {
    title: 'CS502: Final Project Proposal',
    start: new Date(2025, 2, 25),
    end: new Date(2025, 2, 28),
    allDay: true,
    resource: { type: 'Project', color: '#4FA75B' },
  },

  // April 2025
  {
    title: 'CS301: Assignment #2',
    start: new Date(2025, 3, 5),
    end: new Date(2025, 3, 8),
    allDay: true,
    resource: { type: 'Assignment', color: '#5BC0DE' },
  },
  {
    title: 'CS202: Group Discussion Board (GDB)',
    start: new Date(2025, 3, 15),
    end: new Date(2025, 3, 18),
    allDay: true,
    resource: { type: 'GDB', color: '#EE9B1F' },
  },
  {
    title: 'CS410: Software Engineering Seminar',
    start: new Date(2025, 3, 25),
    end: new Date(2025, 3, 27),
    allDay: true,
    resource: { type: 'Seminar', color: '#33A2FF' },
  },

  // May 2025
  {
    title: 'CS610P: Final Project Submission',
    start: new Date(2025, 4, 5),
    end: new Date(2025, 4, 10),
    allDay: true,
    resource: { type: 'Project', color: '#5D3FD3' },
  },
  {
    title: 'CS102: Quiz no 4 (Graded Quiz)',
    start: new Date(2025, 4, 15),
    end: new Date(2025, 4, 22),
    allDay: true,
    resource: { type: 'Quiz', color: '#4FA75B' },
  },
  {
    title: 'CS301: Midterm Exam',
    start: new Date(2025, 4, 25),
    end: new Date(2025, 5, 1),
    allDay: true,
    resource: { type: 'Exam', color: '#D9534F' },
  },

  // June 2025
  {
    title: 'CS202: Final Exam',
    start: new Date(2025, 5, 10),
    end: new Date(2025, 5, 19),
    allDay: true,
    resource: { type: 'Exam', color: '#D9534F' },
  },
  {
    title: 'CS302: Research Paper Submission',
    start: new Date(2025, 5, 20),
    end: new Date(2025, 5, 30),
    allDay: true,
    resource: { type: 'Research', color: '#33A2FF' },
  },
  {
    title: 'CS601: Practical Lab Test',
    start: new Date(2025, 5, 28),
    end: new Date(2025, 6, 4),
    allDay: true,
    resource: { type: 'Lab', color: '#A83279' },
  },
];




const CustomEvent = ({ event }) => (
  <span style={{ background: event.resource.color, color: 'white', padding: '2px 5px', borderRadius: '4px' }}>
    {event.title}
  </span>
);

function ToDoCalender() {
  const [view, setView] = useState('month');

  return (
    <div className='bg-[#F2F3F8] px-8 py-4 font-["Roboto"] '>
      <h1 className="text-[21px] font-[500] py-5 pb-8">To Do Calendar</h1>
      <div className='bg-[#7A52D9] px-6 py-4 text-white flex items-center justify-between'>
        <h1 className="text-[21px] font-[500]">My Studied Courses</h1>
        <p>&lt;Back</p>
      </div>
      <div className='p-4 bg-white'>
        <div className='bg-white px-5 py-2  pb-16 max-[625px]:pb-28  border-[1px] border-gray-700 calender' style={{ height: '80vh' }}>
          <div className='flex gap-5 py-5 flex-wrap'>
            <div className='flex items-start gap-1'>
              <div className='w-4 h-4 bg-[#E96853] rounded-sm'></div>
              <p className='text-sm'>Assignment</p>
            </div>
            <div className='flex items-start gap-1'>
              <div className='w-4 h-4 bg-[#4FA75B] rounded-sm'></div>
              <p className='text-sm'>Quiz</p>
            </div>
            <div className='flex items-start gap-1'>
              <div className='w-4 h-4 bg-[#EE9B1F] rounded-sm'></div>
              <p className='text-sm'>GDB</p>
            </div>
            <div className='flex items-start gap-1'>
              <div className='w-4 h-4 bg-[#B833FF] rounded-sm'></div>
              <p className='text-sm'>Pending Fee</p>
            </div>
            <div className='flex items-start gap-1'>
              <div className='w-4 h-4 bg-[#B49195] rounded-sm'></div>
              <p className='text-sm'>Quiz Result</p>
            </div>
          </div>
          <Calendar
          className='min-w-[600px]'
            localizer={localizer}
            events={events}
            defaultView={view}
            views={['month', 'week', 'day']}
            components={{
              event: CustomEvent,
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.resource.color,
                color: 'white',
                borderRadius: '4px',
                padding: '2px',
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoCalender;
