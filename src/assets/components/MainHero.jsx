import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function MainHero() {
  return (
    <div id='main'>
      <img src='images/MainImage.jpg' alt="User-Image" className='w-full h-screen object-cover object-left scale-x-[-1]' />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm RAJIV</h1>
        <h2 className='sm:text-3xl text-2xl flex py-4 text-gray-800'>I'm a 

        <TypeAnimation
      sequence={[
        
        'Developer',
        1000, 
        'Coder',
        1000,
        'Tech-Enthusiast',
        1000,
        
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />





        </h2>
        <div className='flex justify-between pt-6 max-w-[150px] w-full'>
          {/* <FaTwitter size={20} className='cursor-pointer'/> */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className='cursor-pointer'/>
            </a>
            <a href="https://www.linkedin.com/in/rajiv-kumar-98ba78266/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} className='cursor-pointer'/>
            </a>
            <a href="https://github.com/Nomad-Rajiv" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className='cursor-pointer'/>
            </a>
        </div>
      </div>
      </div>
    </div>

  )
}

export default MainHero
