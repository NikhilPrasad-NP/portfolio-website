import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 backdrop-blur-xs relative '>
            <nav className='flex justify-center text-white border-none'>
                <div className='flex justify-between items-center w-[80%] pt-5 mt-5 pb-5 mb-5'>
                    <div className='text-4xl font-bold'>
                        <h1>Nikhil Prasad</h1>
                    </div>

                    <div className='hidden md:flex justify-center items-center'>
                        <ul className='flex flex-row text-2xl gap-15 '>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#hero">Home</a></li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#about">About</a></li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#projects">Projects</a></li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#skills">Skills</a></li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        {menuOpen ? <HiX onClick={() => setMenuOpen(!menuOpen)} className='text-4xl text-white cursor-pointer' /> : <HiMenu onClick={() => setMenuOpen(!menuOpen)} className='text-4xl text-white cursor-pointer' />}
                    </div>
                </div>
            </nav>
            {menuOpen && (
                <div className='absolute md:hidden flex justify-center items-center text-white w-full backdrop-blur-xs top-full left-0'>
                    <ul className='flex flex-col items-center py-6 text-2xl gap-8'>
                        <li onClick={()=>setMenuOpen(false)} className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#hero">Home</a></li>
                        <li  onClick={()=>setMenuOpen(false)} className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#about">About</a></li>
                        <li onClick={()=>setMenuOpen(false)} className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#projects">Projects</a></li>
                        <li onClick={()=>setMenuOpen(false)} className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#skills">Skills</a></li>
                        <li onClick={()=>setMenuOpen(false)} className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar
