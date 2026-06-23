import React from 'react'

const Hero = () => {
  return (
    <section className='flex justify-center'>
      <div className='flex justify-between items-center w-[80%] pt-5 mt-5'>
        <div className='text-white flex flex-col gap-8'>
          <h1 className='text-7xl font-semibold'>Hello.</h1>
          <p className='text-5xl'>I'm Nikhil Prasad</p>
          <h1 className='text-8xl font-semibold'>Web Developer</h1>
          <div className='flex gap-5 text-3xl mt-8'>
            <button className='bg-[#FFF5E9] text-[#483322] p-3 rounded-lg'>Projects</button>
            <button className='border-[#FFF5E9] border-2 p-3 rounded-lg'>My Resume</button>
          </div>
        </div>
        <div className='w-110'><img className='w-full rounded-3xl object-cover' src="https://i.pinimg.com/736x/18/9d/64/189d649b4168907d058586e458e43ea6.jpg" alt="Image" /></div>
      </div>
    </section>


  )
}

export default Hero
