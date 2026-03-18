import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({title, braille, text}) => (
    <div>
        <h4>{braille}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
)

const TitleBox = ({title, braille}) => (
    <div>
        <h4>{braille}</h4>
        <h2>{title}</h2>
    </div>
)

const ProjectBox = ({title, link, desc}) => (
    <div class='project'>
        <div class='project-info'>
            <a href={link}>{title}</a>
            <p>{desc}</p>
        </div>
    </div>
)

const renderContent = {
    1: (
        <InfoBox
            title='HOME'
            braille='⠠⠓⠠⠕⠠⠍⠠⠑'
            text='I am a student at Texas A&M University studying  computer science. I am from Southlake, Texas.'
        />
    ),
    2: (
        <InfoBox
            title='ABOUT'
            braille='⠠⠁⠠⠃⠠⠕⠠⠥⠠⠞'
            text='I am a junior Computer Science student at Texas A&M University with a strong interest in software development 
            and problem-solving. I am driven by a desire to understand systems at a fundamental level, from exploring hardware to 
            designing and implementing clean and efficient code. I enjoy collaborating in team-based environments where ideas, 
            technical skills, and perspectives come together to build effective solutions.I am a student at Texas A&M University 
            studying  computer science. I am from Southlake, Texas.'
        />
    ),
    3: ([
        <TitleBox
            title='PROJECTS'
            braille='⠠⠏⠠⠗⠠⠕⠠⠚⠠⠑⠠⠉⠠⠞⠠⠎'
        />,
        <ProjectBox 
            title='lockN▸'
            link='https://github.com/thompsonbhigh/lockN'
            desc='Productivity app using Node, Express, EJS'
        />,
        <ProjectBox 
            title='Panda Express Web App▸'
            link='https://github.com/thompsonbhigh/Panda-Express-Web-App'
            desc='Conceptual web app for Panda Express'
        />,
        <ProjectBox 
            title='Point of Sales Software▸'
            link='https://github.com/thompsonbhigh/Point-of-Sales-Software'
            desc='Cashier and management software for restaurants'
        />,
    ]),
    4: (
        <InfoBox 
            text='I was able to build this with the help of some amazing 3D modelers'
            link='/credits'
            btnText='Check them out →'
        />
    )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo