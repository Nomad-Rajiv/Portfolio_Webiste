import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 'Aug-2023',
    title: 'Frontend Developer Trainee At Primathon Technology',
    duration: "Present",
    details: 
    `I have gained knowledge and expertise in a wide range of technologies and practices
    that are essential for web development.
    Honed my skills in ReactJS, JavaScript, CSS3, and HTML5, enabling me to build dynamic
    and interactive web applications.
     Worked with Tailwind CSS, a powerful utility-first framework, which allows me to
    create visually appealing and responsive designs efficiently.
     Well-versed in implementing industry best practices for writing clean and maintainable
    code.`
  }
]

function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {
        data.map((item,idx)=>(
          <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          details={item.details} 
          duration={item.duration}
          />
        ))
      }
    </div>
  )
}

export default Work
