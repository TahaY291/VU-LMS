import React from 'react'

const LectureSchedule = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM", "05:00 AM", "06:00 AM", "07:00 AM"];

  const events = [
    { day: "Mon", time: "11:00 AM", title: "CS603 - Lec 13", room: "CDROOM-13", type: "regular" },
    { day: "Mon", time: "03:00 PM", title: "CS511 - Lec 13", room: "CDROOM-13", type: "regular" },
    { day: "Wed", time: "08:00 PM", title: "CS202 - Lec 37", room: "CDROOM-1" , type: "regular"},
    { day: "Tue", time: "08:00 PM", title: "CS202 - Lec 37", room: "CDROOM-1" , type: "regular"},
    { day: "Thu", time: "08:00 PM", title: "CS202 - Lec 37", room: "CDROOM-1" , type: "repeat"},
    { day: "Fri", time: "08:00 PM", title: "CS202 - Lec 37", room: "CDROOM-1" , type: "repeat"},
    { day: "Sat", time: "08:00 PM", title: "CS202 - Lec 37", room: "CDROOM-1" , type: "repeat"},

    // Add more events here
  ];

  const getEvent = (day, time) => {
    const event = events.find(e => e.day === day && e.time === time);
    console.log(event);
    return event ? (
      <div className={ `${event.type === "regular" ? "bg-[#F1B943]" : " bg-[#51A1ED]"} text-black  p-2 py-5 text-sm text-center align-top`}>
        <div className="font-bold underline">{event.title}</div>
        <div>{event.room}</div>
      </div>
    ) : null;
  };
  function handleClick (day, time){
    console.log(day, time);
    
  }

  return (
    <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
        <h1 className="text-[21px] font-[500] py-5 pb-8">Weekly Lecture Schedule</h1>
        <div></div>
    <div className='overflow-x-auto p-4 shadow-lg font-["Poppins"] bg-white '>
      <table className="table-auto border-collapse border border-gray-200 w-full min-w-[800px]">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-[#716ACA] text-white font-[500]">Time</th>
            {days.map(day => (
              <th key={day} className="border border-gray-300 p-2 bg-[#716ACA] text-white font-[500]">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={time} className={`${index % 2 == 0 ? 'bg-gray-100' : ''}`}>
              <td className="border border-gray-300 p-2 text-center bg-gray-50 text-gray-500 text-sm font-bold">{time}</td>
              {days.map(day => (
                <td key={day} className="border border-gray-300 p-2" onClick={() => handleClick(day, time)}>
                  {getEvent(day, time)}
                </td>
              ))}
            </tr>

          ))}
          <tr>
          <td className='bg-[#f1b943]'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'>Regular</td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          </tr>
          <tr className='bg-gray-100'>
          <td className='bg-[#51a1ed]'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300' >Repeat</td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          <td className='text-sm text-red-500 px-4 py-3 border border-gray-300'></td>
          </tr>
        </tbody>
      </table>
              </div>
    </div>
  );
}

export default LectureSchedule
