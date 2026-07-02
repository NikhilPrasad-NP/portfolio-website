import React from 'react'
import resume from "../../assets/resume.pdf/NIKHIL_PRASAD_Resume.pdf";
const Hero = () => {

  return (
    <section className='flex justify-center scroll-mt-24' id='hero'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center w-[90%] md:w-[80%] py-10 gap-10 md:gap-0'>
        <div className='text-white flex flex-col gap-6 text-center md:text-left'>
          <h1 className='text-5xl md:text-7xl font-semibold'>Hello.</h1>
          <p className='text-3xl md:text-5xl'>I'm Nikhil Prasad</p>
          <h1 className='text-5xl md:text-8xl font-semibold'>Web Developer</h1>
          <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-lg md:text-3xl mt-6'>
            <a href="https://github.com/NikhilPrasad-NP?tab=repositories" target='_blank' rel="noopener noreferrer">
              <button className='bg-[#FFF5E9] text-[#644330] p-3 rounded-lg hover:bg-[#dacdbc]
transition-all duration-200'>Projects</button>
            </a>
            <a href={resume} target="_blank"
              rel="noopener noreferrer">
              <button className='border-[#FFF5E9] border-2 p-3 rounded-lg hover:border-[#dacdbc]
transition-all duration-200'>My Resume</button>
            </a>
          </div>
        </div>
        <div className='w-full max-w-[320px] md:max-w-[440px]'><img className='w-full rounded-3xl object-cover' src="https://i.pinimg.com/736x/18/9d/64/189d649b4168907d058586e458e43ea6.jpg" alt="Image" /></div>
      </div>
    </section>
  )
}

export default Hero
