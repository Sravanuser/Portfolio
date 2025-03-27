import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoBag } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { SiFreelancer } from "react-icons/si";

export default function AboutMe() {
    return (
        <div className='aboutme' id="about">
            <h1 className='experience'>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023 - 2025"
                    contentStyle={{ borderTop: "5px solid #2196F3" }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFF' }}
                    icon={<IoBag />}
                >
                    <h3 className="vertical-timeline-element-title">React Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dolf Technologies</h4>
                    <p>
                        Worked as a React.js Developer at Dolf Technologies for 2 years, building scalable apps with React.js, Redux, and Axios. Improved performance, integrated APIs, and enhanced code quality using Hooks, Jest, and Tailwind CSS.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2023"
                    contentStyle={{ borderTop: "5px solid #FFD54F" }}
                    iconStyle={{ background: '#FFD54F', color: '#FFF' }}
                    icon={<IoIosSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">Vaagdevi College of Engineering</h4>
                    <p>
                        Completed B.Tech in ECE from Vaagdevi College of Engineering with a focus on electronics and software development.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2023"
                    contentStyle={{ borderTop: "5px solid #E57373" }}
                    iconStyle={{ background: '#E57373 ', color: '#FFF' }}
                    icon={<SiFreelancer />}
                >
                    <h3 className="vertical-timeline-element-title">Free Lance</h3>
                    <h4 className="vertical-timeline-element-subtitle">Web Development</h4>
                    <p>
                        Designed and developed responsive websites using HTML, CSS, JavaScript, and React.js. Focused on improving user experience and visual design through clean code and modern UI frameworks.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
