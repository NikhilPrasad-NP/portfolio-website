import React from 'react'
import { skills } from '../../Data/skills'
import SkillsCard from './SkillsCard'

const Skills = () => {

  return (
    <section className='flex justify-center scroll-mt-24' id='skills'>
      <div className='w-[80%] pt-10 pb-10 mb-10 mt-10'>
        <div className='text-white text-center text-6xl font-semibold pb-10 mb-5'><h2>My Skills</h2></div>
        <div className='text-2xl leading-relaxed text-[#fff5e9ac] text-center pb-10 mb-10'><p >I enjoy building modern, responsive and user-friendly web
          applications using these technologies.</p></div>
        <div className='grid grid-cols-2 gap-8'>
          {skills.map((skill) => {
            return (<SkillsCard key={skill.name} name={skill.name} progress={skill.progress} />)
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
