import React from 'react'

const Contacts = () => {
  return (
    <section className='flex justify-center scroll-mt-24' id='contact'>
      <div className='w-[80%] pt-10 pb-10 mb-10 mt-10'>
        <div className='flex flex-row justify-between items-center text-white gap-6 pt-10 pb-10'>
          <div className='text-white w-[50%] flex flex-col gap-8'>
            <h2 className='text-white text-5xl'>Contact</h2>
            <h3 className='text-white text-6xl font-bold'>Want to connect ?</h3>
            <h3 className='text-white text-6xl font-bold'>Let's talk!</h3>
            <p className='text-white text-2xl'>Email: nikhilprasad2411@gmail.com</p>
            <button className='bg-[#FFF5E9] text-black p-5 rounded-lg hover:bg-[#dacdbc]
          transition-all duration-200 w-40 mt-5'>Send Message</button>
          </div>
          <div className='w-[40%]'>
            <form action="" className='flex flex-col gap-5 '>
              <input type='text' placeholder='Name' className='border-b text-white placeholder:text-white p-2 text-xl' />
              <input type="email" placeholder='Email' className='border-b text-white placeholder:text-white p-2 text-xl' />
              <textarea name="" id="" className='border-b h-40 placeholder:text-white p-2 text-xl' placeholder='Message'></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
