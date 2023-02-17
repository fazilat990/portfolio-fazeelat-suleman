import React from 'react';

function About() {
    
  return (
    <div className='about-wrap'>
        <div className="container">
            <div className="grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-2">
                <div className='about-intro'>
                    <h1 className='text-[2.7rem] md:text-[4rem] font-black text-[var(--green)]'> <span className='font-[Aerospace]'>I</span>, Me <sub>&</sub> Myself</h1>
                    <p className='mb-5'>I'm an ambitious Developer located in Pakistan. I have a serious passion for UI effects, creating intuitive, dynamic user experiences in Frontend Designing and Development. I am energetic, Well-organised person, problem solver, independent employee with high attention to detail, full of passion and ever ready to face the challenges. 
                    </p>
                    <p>I am very much eager to serve in the fields of Web Development to add more value which leads to increase in the profitability of organization.
                    </p>
                </div>
                <div className="skills">
                    skills
                </div>
            </div>
        </div>
    </div>
  )
}

export default About