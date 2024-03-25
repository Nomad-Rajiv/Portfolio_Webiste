import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-justify py-8'>
      My project centered around a holistic design approach aimed at creating engaging and user-centric digital experiences. We meticulously crafted intuitive interfaces and seamless interactions, prioritizing usability and accessibility across platforms. Through iterative design processes and user feedback, we refined visual elements and information architecture to ensure clarity and ease of use. My design philosophy emphasizes simplicity, elegance, and functionality, resulting in cohesive and impactful solutions that resonate with users. By combining creativity with user-centered design principles, we deliver compelling digital experiences that exceed expectations and drive meaningful engagement.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img="images/project1.jpg" title='Movie-App'/>
        <ProjectItem img='images/project2.jpg' title='kuch bhi'/>
        <ProjectItem img='images/project3.jpg' title='kuch bhi'/>
        <ProjectItem img='images/project4.jpg' title='kuch bhi'/>
      </div>
    </div>
  )
}

export default Projects
