import React from 'react'
import SkillComponent from '../components/skill-component'
import { Frontend, Backend, Devops, Ui_Ux } from "/public/assets/image.js"

export default function Skill() {
  return (
    <div className='skill-container' id="skills">
      <p className='skill-heading'>Skills</p>
      <div className='skill-box'>
        <SkillComponent source={"../Skills/code.svg"} name={"Frontend Development"} text={"Creative frontend developer building responsive, user-friendly websites with modern frameworks."} skills={Frontend} />
        <SkillComponent source={"../Skills/backend.svg"} name={"Backend Development"} text={"Skilled backend developer creating secure, efficient, and scalable server-side applications."} skills={Backend} />
        <SkillComponent source={"../Skills/feather.svg"} name={"UI/UX"} text={"Passionate UI/UX designer crafting intuitive, engaging, and user-centered experiences."} skills={Ui_Ux}/>
        <SkillComponent source={"../Skills/devops.svg"} name={"DevOps"} text={"Experienced DevOps engineer automating, deploying, and scaling secure, reliable systems."} skills={Devops} />
      </div>
    </div>
  )
}
