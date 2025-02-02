import React, { useState } from "react";
import data from '../array/account.js'


const AccountBook = () => {
  
return <div className='font-["Roboto"] px-8 py-4 bg-[#F2F3F8]'>
          <h1 className="text-[21px] font-[500] py-5 pb-8">My Account Book</h1>
<div className='overflow-auto p-4 shadow-lg font-["Poppins"] bg-white '>
            <table className="border-collapse w-full border calender border-gray-300 mt-4">
              <thead className="bg-[#716ACA] text-white text-xs  tracking-wide">
                <tr >
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Challan No</th>
                  <th className="border border-gray-300 px-1 py-3 font-[500]">Challan Type</th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Payable</th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Paid</th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Balance </th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Date</th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Payment Mode</th>
                  <th className="border border-gray-300 px-2 py-3 font-[500]">Cancelled</th>
                  <th className="border border-gray-300 px-2 py-3  font-[500]">Action</th>
                </tr>
              </thead>
             <tbody>
        {data.map((challan , index) => (
          <tr className={` ${index % 2 === 0 ? "" : "bg-[#F4F5F8]"} text-[14px] align-top text-center`} key={challan["Challan No"]}>
            <td className="border border-gray-300 p-2 font-[300] text-center">{challan["Challan No"]}</td>
            <td className="border border-gray-300 p-2 font-[300]  text-[10.4px]">{challan["Challan Type"]}</td>
            <td className="border border-gray-300 p-2 font-[300]  text-right">{challan.Payable}</td>
            <td className="border border-gray-300 p-2 font-[300]  text-right">{challan.Paid}</td>
            <td className="border border-gray-300 p-2 font-[300]  text-right">{challan.Balance}</td>
            <td className="border border-gray-300 p-2 font-[300] "><p>Due Date:  {challan["Due Date"]  }</p>
              <p className={`${challan["Paid Date"] === "UnPaid" ? "text-red-600" : "text-green-600"}`}> <span className="text-black">Paid Date:</span> {challan["Paid Date"] === "UnPaid" || challan["Paid Date"] === "Unpaid" ? "Unpaid" : challan["Paid Date"]}</p>
            </td>
            <td className="border border-gray-300 p-2 font-[300] ">{challan["Payment Mode"]}</td>
            <td className="border border-gray-300 p-2 font-[300]  text-left">{}</td>
            <td className="border border-gray-300 p-2 font-[300] ">{challan.Action === "PAID" ? <span className="border-[2px] border-[#234304] text-[#234304] text-xs font-extrabold rounded-md px-[1px]">PAID</span> : 
            <span className="text-xs tracking-tighter border-2 border-black text-black font-[600] p-1 cursor-pointer hover:border-gray-600 hover:text-gray-600">
              PAY
            </span>}</td>
          </tr>
        ))}
      </tbody>
              </table>
              <div className="py-5">
                <p className="text-[16px] font-bold ">Total Payable Amount: <span className="text-[#5867dd]"> Rs 9676 / $ 0 </span></p>
              </div>
              </div>
</div>
};

export default AccountBook;
