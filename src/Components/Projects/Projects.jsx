import React from 'react'
import ProjectCards from './ProjectCards'
import { projects } from '../../Data/projects'

const Projects = () => {

  return (
    <section className='flex justify-center scroll-mt-24' id='projects'>
      <div className='w-[80%] pt-10 pb-10 mb-10 mt-10'>
        <div className='text-white text-center text-6xl font-semibold pb-10 mb-10'><h2>Projects</h2></div>
        <div>
          {projects.map((project, index) => {
            
            return (<ProjectCards index={index} key={project.title} title={project.title} tech={project.tech} description={project.description} image={project.image} github={project.github} live={project.live} />)
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
