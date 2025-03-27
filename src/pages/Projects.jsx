import React from 'react'
import ProjectCard from '../components/project-card'

export default function Projects() {
  return (
    <div className='project-container' id="projects">
      <div className='project-heading-section'>
        <p className='project-title'>My Projects</p>
      </div>
      <div className='project-card-section'>
        <ProjectCard source={"../assets/Projects/Authentication.webp"} name={"Authentication"} text={"Secure MERN authentication and authorization project with JWT, bcrypt."} />
        <ProjectCard source={"../assets/Projects/chatApp.svg"} name={"ChatApp"} text={"Real-time chat app with MERN stack, WebSocket, and user authentication."} />
        <ProjectCard source={"../assets/Projects/Ecommerce.svg"} name={"Ecommerce"} text={"Full-stack eCommerce platform with MERN stack, secure payments, and user management."} />
        <ProjectCard source={"../assets/Projects/admin.svg"} name={"Ecommerce"} text={"Role-based quiz app with MERN stack, JWT, and dynamic user permissions."} />
      </div>
    </div>
  )
}
