import React from 'react'
import SkillComponent from '../components/skill-component'
import feather from "../assets/feather.svg"
import code from "../assets/code.svg"
import devops from "../assets/devops.svg"

export default function Skill() {
  return (
    <div className='skill-container center'>
      <div className="skill-section flex-column">
        <div className='skill-text'>
          <p className='skill-heading'>My Skills</p>
          <p className='skill-expertise'>My Expertise</p>
        </div>
        <div className='skill-box flexbox'>
          <SkillComponent source={code} name={"Web Development"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique"} />
          <SkillComponent source={feather} name={"UI/UX"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique"} />
          <SkillComponent source={devops} name={"DevOps"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique"} />
        </div>
      </div>
    </div>
  )
}
