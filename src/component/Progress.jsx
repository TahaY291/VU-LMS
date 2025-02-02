import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

let array = [{ Week: 1, Attendence: "Present" }, { Week: 2, Attendence: "Present" }, { Week: 3, Attendence: "Present" }, { Week: 4, Attendence: "Present" }, { Week: 5, Attendence: "Present" }, { Week: 6, Attendence: "Present" }, { Week: 7, Attendence: "Present" }, { Week: 8, Attendence: "Present" }, { Week: 9, Attendence: "Present" }, { Week: 10, Attendence: "Absent" }, { Week: 11, Attendence: "Absent" }, { Week: 12, Attendence: "Absent" }, { Week: 13, Attendence: "Absent" }, { Week: 14, Attendence: "Absent" }]

let a = array.length;


const data = {
  labels: ['Present', 'Absent'],
  datasets: [
    {
      data: [ ((array.filter(item => item.Attendence === "Present").length / a) * 100).toFixed(2) , ((array.filter(item => item.Attendence === "Absent").length / a) * 100).toFixed(2)],
      backgroundColor: ['#66CECF', '#E96082'],
      hoverBackgroundColor: ['#81d3d4', '#eb8aa2'],
    },
  ],
};

const assignment = {
  labels: ['submitted', 'not-submitted'],
  datasets: [
    {
      data: [77, 23],
      backgroundColor: ['#509CFF', '#5FC1C1'],
      hoverBackgroundColor: ['#5b9cf0', '#75c7c7'],
    },
  ],
};
const gdb = {
  labels: ['Attempted', 'not-Attempted'],
  datasets: [
    {
      data: [87, 13],
      backgroundColor: ['#EE9E3D', '#F5CD54'],
      hoverBackgroundColor: ['#eba857', '#F5CD54'],
    },
  ],
};
const quizzes = {
  labels: ['Attempted', 'not-Attempted'],
  datasets: [
    {
      data: [95, 5],
      backgroundColor: ['#8142FF', '#EE8FF5'],
      hoverBackgroundColor: ['#9d6dfc', '#eda2f2'],
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#444',
      borderWidth: 1,
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

function Progress() {
  return (
    <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
      <h1 className="text-[21px] font-[500] py-5 pb-8">Progress Timeline</h1>
      <div className='bg-white p-5 border-[1px] border-gray-400' >
        <h1 className='text-[21px] font-[500] py-5 pb-8 text-[#212529]'>Attendence</h1>
        <hr />
        <div className='flex max-md:flex-col gap-8 p-5'>

          <div className='basis-[40%] border-r-[1px] border-gray-400 max-md:border-b-[1px] max-md:border-r-0  max-md:pb-4 `'>
            <p className='text-[15px] font-["Poppins"] font-semibold pb-5'>Overall Attendence</p>
            <div className='w-[70%] min-w-[250px] m-auto '>
              <Pie data={data} options={options}  className='max-md:w-full' />
            </div>
          </div>
          <div className='w-full basis-[60%]  '>
            <p className='text-[15px] font-["Poppins"] font-semibold pb-5'>Week Wise Attendence</p>
            <div className='max-h-[300px] overflow-y-auto'>
              <table className='w-full '>
                <thead>
                  <tr className='text-left'>
                    <th className="border border-gray-300 p-2 bg-gray-200 text-black font-[500]">Week</th>
                    <th className="border border-gray-300 p-2 bg-gray-200 text-black font-[500]">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map(item => (
                    <tr key={item.Week} className='font-["Poppins"]'>
                      <td className='text-sm border-gray-300 p-3 border text-gray-600'>Week {item.Week}</td>
                      <td className={`${item.Attendence === "Present" ? "text-green-400" : "text-red-600"} text-sm  border-gray-300 px-2 py-1 border`}>{item.Attendence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-5 ' >
        <h1 className='text-[21px] font-[500] py-5 pb-8 text-[#212529]'>Graded Activities</h1>
        <hr />
        <div className=' gap-8 p-5 w-full '>
          <div className='flex items-center justify-between m-auto flex-wrap w-full h-fit `'>
            <div className='m-auto'>
              <p className='text-[15px] text-left font-["Poppins"] font-semibold pb-5'>Assignment</p>
              <div className='w-full flex items-center  ' >
                <Pie data={assignment} options={options} />
              </div>
            </div>
            <div className='h-[60vh] w-[1px] max-sm:hidden my-4  max-md:h-[1px] max-md:w-full max-md:block bg-gray-300 '></div>
            <div className='m-auto'>
              <p className='text-[15px] text-left  font-["Poppins"] font-semibold pb-5'>GDB</p>
              <div className='w-full' >
                <Pie data={gdb} options={options} />
              </div>
            </div>
            <div className='h-[60vh] w-[1px]  max-xl:w-full my-4 max-xl:h-[1px] bg-gray-300 '></div>
            <div className='m-auto'>
              <p className='text-[15px] text-left font-["Poppins"] font-semibold pb-5'>Quizzes</p>
              <div className='w-full' >
                <Pie data={quizzes} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Progress;
