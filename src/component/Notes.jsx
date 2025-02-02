import React, { useState } from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbXboxX } from "react-icons/tb";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

let array = ["bg-blue-200", "bg-orange-200", "bg-red-200", "bg-green-200"]

function Notes() {

  const [currentDate, setCurrentDate] = useState(getDate)
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [clrNo, setClrNo] = useState(0)
  let no  = 0 ;
  function clrNoFun() {
    if (no === 4) {
      no = 0;
      return no++;
    }
    return no++;
  }
  

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const handleSubmit = () => {
    if (title !== "" && note !== "") {
      setNotes([...notes, { id: notes.length + 1, title: title, note: note, date: currentDate, isEditDisable: true }])
      setTitle('')
      setNote('')
    }
  }

  const handleEdit = (id) => {
    let newNotes = notes.map(note => note.id === id ? { ...note, isEditDisable: !note.isEditDisable } : note)
    setNotes(newNotes)
  }


  const handleDelete = (id) => {
    const notesToDelete = notes.filter(note => note.id !== id)
    setNotes(notesToDelete)
  }

  const handleCancel = ()=> {
    setTitle("")
    setNote("")
  }

  return (
    <div className='px-9 min-h-[91vh]'>
      <h1 className="text-[21px] font-[500] py-5 pb-8">Notes</h1>
      <div className='w-full min-h-[60vh] px-4 py-2 bg-white '>
        <div className='pb-4'>
        </div>
        <div className='flex gap-5 flex-wrap'>
          <div className='shadowCss  px-4 w-fit h-fit py-3'>
            <textarea value={title} onChange={(e) => setTitle(e.target.value)} className='p-2 outline-none focus:border-blue-800 border-gray-500 border-[1px]' placeholder='Title' cols="23" rows="4" />
            <p>{currentDate}</p>
            <hr className='h-2' />
            <textarea value={note} onChange={(e) => setNote(e.target.value)} name="" id="" className='p-2 outline-none focus:border-blue-800 border-gray-500 border-[1px]' placeholder='Add note' cols="23" rows="6" />
            <div className='flex items-center justify-center gap-1'>
              <button onClick={() => handleSubmit()} className=''> <IoIosCheckmarkCircleOutline className='text-black text-3xl font-thin'    /> </button>
              <button onClick={handleCancel} className=''><TbXboxX className='size-7' /></button>
            </div>
          </div>
            {
              notes.map((item, index) => (
                <div key={index} className={`${array[clrNoFun()]} shadowCss px-4 w-fit py-3`}>
                  <textarea className={`p-2 outline-none border-gray-500 border-[1px] `} value={item.title} onChange={(e)=> setNotes(notes.map(note => note.id === item.id ? {...note, title: e.target.value} : note))} disabled={item.isEditDisable} placeholder='Title' cols="23" rows="4" />
                  <p>{item.date}</p>
                  <hr className='h-2' />
                  <textarea className='p-2 outline-none border-gray-500 border-[1px]' value={item.note} onChange={(e)=> setNotes(notes.map(note => note.id === item.id ? {...note, note: e.target.value}: note))} disabled={item.isEditDisable} placeholder='Add note' cols="23" rows="6" />
                  <div className='flex items-center justify-center gap-1'>
                    <button onClick={() => handleEdit(item.id)} className='border-2 border-green-600 rounded-full p-[2px] text-green-600' ><RiEditLine className='size-5' /></button>
                    <button onClick={() => handleDelete(item.id)} className='border-2 border-red-600 rounded-full p-[2px] text-red-600'><RiDeleteBin6Line className='size-5' /></button>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Notes
