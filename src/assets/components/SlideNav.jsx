import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import { GrProjects } from "react-icons/gr";
import { BsPerson } from 'react-icons/bs'

function SlideNav() {
  const [nav, SetNav] = useState(false);
  const handleNav = () =>{
    SetNav(!nav);
    console.log("state Changed");
  }
  return (
    <div>
      <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden'
      onClick={handleNav} 
      />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20] md:hidden'>
            <a  onClick={handleNav}
            href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>

            <a  onClick={handleNav}
            href="#work" id='#work'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20}/>
              <span className='pl-4'>Work</span>
            </a>

            <a  onClick={handleNav}
            href="#projects" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>

            <a  onClick={handleNav}
            href="#resume" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20}/>
              <span className='pl-4'>Resume</span>
            </a>

            <a onClick={handleNav}
            href="#contact" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
        : (
          ''
        )}

        <div className='md:block hidden fixed top-[25%] z-[10]'>

          <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
              <AiOutlineHome size={20}/>
            </a>

            <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
              <GrProjects size={20}/>
            </a>

            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
              <AiOutlineProject size={20}/>
            </a>

            <a href="https://drive.google.com/file/d/1uLAKkT0B8128d94GX85C6whFjFi8qlvN/view?usp=sharing" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
              <BsPerson size={20}/>
            </a>

            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default SlideNav
