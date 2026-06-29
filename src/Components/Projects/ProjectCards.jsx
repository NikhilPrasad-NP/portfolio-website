import React from 'react'
// 'flex justify-between text-white gap-6 pt-10'
const ProjectCards = ({ title, tech, description, image, github, live, index }) => {
  return (
    <div className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
      } justify-between text-white gap-6 pt-10 pb-20`}>
      <div className='text-white w-[50%] flex flex-col gap-5'>
        <h1 className='font-semibold text-4xl pb-8'>{title}</h1>
        <div className='flex gap-2'>
          {tech.map((item, idx) => {
            return (<span key={idx} className='bg-[#202E37] rounded-full px-5 py-3 text-2xl'>{item}</span>)
          })}
        </div>
        <p className='text-2xl leading-relaxed text-[#fff5e9ac] pb-10'>{description}</p>
        <div className='flex gap-5 text-3xl mt-2'>
          <a href={github} target="_blank" rel="noopener noreferrer"><button className='bg-[#FFF5E9] text-black p-3 rounded-lg hover:bg-[#dacdbc]
          transition-all duration-200'>github</button></a>
          <a href={live} target="_blank" rel="noopener noreferrer"><button className='border-[#FFF5E9] border-2 p-3 rounded-lg hover:border-[#dacdbc]
transition-all duration-200'>live project</button></a>
        </div>
      </div>
      <div className='w-[40%]'><img className='w-full rounded-2xl object-cover' src={image} alt={`${title} screenshot`} /></div>
    </div>
  )
}

export default ProjectCards
