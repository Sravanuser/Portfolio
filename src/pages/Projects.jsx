import React from 'react'
import github from "../assets/github.svg"
import ProjectCard from '../components/project-card'
import Authentication from "../assets/Authentication.webp"
import chatApp from "../assets/chatApp.png"
import Ecommerce from "../assets/Ecommerce.png"

export default function Projects() {
  return (
    <div className='project-container flex-column'>
      <div className='project-heading-section flexbox'>
        <p className='project-title'>My Projects</p>
          <div className='github-btn center'>
            <img src={github} alt="github-icon" className='github-icon' />
            <p className='github-btn-text'>Visit My GitHub</p>
          </div>
      </div>
      <div className='project-card-section flexbox'>
        <ProjectCard source={Authentication} name={"Authentication"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"}/>
        <ProjectCard source={chatApp} name={"ChatApp"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"}/>
        <ProjectCard source={Ecommerce} name={"Ecommerce"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"}/>
      </div>
    </div>
  )
}
