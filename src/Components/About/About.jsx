import React from 'react'


const About = () => {

  return (
    <section className='flex justify-center'>
      <div className='flex justify-between w-[80%] pt-10 pb-10 mb-10 mt-10'>
        <div className='w-[30%]'><img className='w-full rounded-3xl object-cover' src="https://i.pinimg.com/736x/18/9d/64/189d649b4168907d058586e458e43ea6.jpg" alt="" /></div>
        <div className='text-white w-[50%] flex flex-col gap-5'>
          <h1 className='text-6xl font-semibold pb-10'>About Me</h1>
          <p className='text-2xl leading-relaxed text-[#fff5e9ac] pb-10'>Hello! I'm Nikhil Prasad, a Frontend Developer who loves building websites and web applications. I enjoy working with React and Tailwind CSS and constantly challenge myself by creating projects that help me grow as a developer. My goal is to become a Full Stack Developer and build impactful software.</p>
          <div className='flex gap-8'>
            <span className='font-semibold text-xl w-35'>Name: </span>
            <span className='text-xl text-[#fff5e9ac]'>Nikhil Prasad</span>
          </div>
          <div className='flex gap-8'>
            <span className='font-semibold text-xl w-35'>Role: </span>
            <span className='text-xl text-[#fff5e9ac]'>Frontend Developer</span>
          </div>
          <div className='flex gap-8'>
            <span className='font-semibold text-xl w-35'>Education: </span>
            <span className='text-xl text-[#fff5e9ac]'>Bachelor of Computer Applications (BCA)</span>
          </div>
          <div className='flex gap-8'>
            <span className='font-semibold text-xl w-35'>Skills: </span>
            <span className='text-xl text-[#fff5e9ac]'>HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub</span>
          </div>
          <div className='flex gap-8 pb-10'>
            <span className='font-semibold text-xl w-35'>Goal: </span>
            <span className='text-xl text-[#fff5e9ac]'>Becoming a Full Stack Developer</span>
          </div>
          <p className='text-3xl pb-4'>10+ Projects Completed</p>
          <div className='text-2xl'><button className='bg-[#FFF5E9] text-black p-3 rounded-lg hover:bg-[#dacdbc]
          transition-all duration-200'>My Resume</button></div>
        </div>
      </div>
    </section>
  )
}

export default About
