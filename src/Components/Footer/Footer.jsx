import React from 'react'
import { FaGithub, FaLinkedin, MdEmail } from "../../assets/Icons/icons";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#18242E] pt-10 pb-5 mt-10">

      <div className="w-[80%] flex flex-col items-center text-center text-white gap-3">

        <h2 className='text-4xl font-bold'>Nikhil Prasad</h2>

        <p className='text-3xl'>Frontend Developer</p>

        <div className='flex gap-8 text-4xl text-white hover:text-[#FFF5E9] transition-all duration-200'>

          <a href="https://github.com/NikhilPrasad-NP"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/nikhil-prasad-620b5939b">
            <FaLinkedin />
          </a>

          <a href="mailto:nikhilprasad2411@gmail.com">
            <MdEmail />
          </a>

        </div>

        <p>© 2026 Nikhil Prasad. All Rights Reserved.</p>

      </div>

    </footer>
  )
}

export default Footer
