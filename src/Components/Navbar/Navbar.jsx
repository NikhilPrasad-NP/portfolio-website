import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-center text-white border-none'>
                <div className='flex justify-between items-center w-[80%] pt-5 mt-5'>
                    <div className='text-4xl font-bold'>
                        <h1>Nikhil Prasad</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <ul className='flex flex-row text-2xl gap-15 '>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#home"></a>Home</li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#about"></a>About</li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#projects"></a>Projects</li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#skills"></a>Skills</li>
                            <li className='hover:text-[#dacdbc] transition-all duration-200 cursor-pointer'><a href="#contacts"></a>Contacts</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
