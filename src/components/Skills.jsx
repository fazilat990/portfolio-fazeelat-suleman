import React from 'react';
import '../assets/css/skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// DOC: https://www.npmjs.com/package/react-circular-progressbar

function Skills() {
  const tailwind = 50;
  return (
    <div className='skills-wrap'>
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-2">
          <div className='about-intro'>
            <h1 className='text-[2.7rem] md:text-[4rem] font-black text-[var(--green)]'> <span className='font-[Aerospace]'>I</span>, Me <sub>&</sub> Myself</h1>
            <p className='mb-5'>I'm an ambitious Developer located in Pakistan. I have a serious passion for UI effects, creating intuitive, dynamic user experiences in Frontend Designing and Development. I am energetic, Well-organised person, problem solver, independent employee with high attention to detail, full of passion and ever ready to face the challenges.
            </p>
            <p>I am very much eager to serve in the fields of Web Development to add more value which leads to increase in the profitability of organization.
            </p>
          </div>
          
          <div className="skills grid grid-cols-2 items-center gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-4">
          <div className="skill">
          <CircularProgressbar value={tailwind} text={`${tailwind}%`} styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '16px',
            strokeWidth: 10,
            pathTransitionDuration: 2,
            pathTransition: 'none',
            pathColor: `rgba(62, 152, 199, ${tailwind / 100})`,
            textColor: '#fff',
            trailColor: 'transparent',
            backgroundColor: '#3e98c7',
          })} />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="var(--green)" />
                        <stop offset="100%" stopColor="var(--blue)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills