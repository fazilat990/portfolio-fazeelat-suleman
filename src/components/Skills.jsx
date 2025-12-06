import '../assets/css/skills.css';
import SkillsData from '../data/skills.json';
import ProgressBar from './ProgressBar';
// ProgressBar moved to `src/components/ProgressBar.jsx`

function Skills() {
  const skillsDetailsData = SkillsData.skillsDetails.map(skill => ({
    skillname: skill.skillname,
    skillPercentage: skill.skillPercentage,
    skillIcon: skill.skillIcon
  }));

  return (
    <div className='skills-wrap py-5'>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-2">
          <div className='about-intro'>
            <h1 className='text-[2.7rem] md:text-[4rem] font-black text-[var(--green)]'> Skills <sub>&</sub> Experience</h1>
            <p className='mb-5'>Since beginning my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
            </p>
            <p className='mb-5'>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, jQuery, Bootstrap, building small and medium web apps, features, animations, and coding interactive layouts.
            </p>
            <p className='mb-5'>I also have full-stack developer experience with popular open-source CMS like (WordPress & Shopify).
            </p>
            <p>Visit my <a href="https://www.linkedin.com/in/fazeelat-suleman-378841110/" target="_blank" rel="noreferrer">LinkedIn</a> profile for more details or just <a href="/contact">contact</a> me.
            </p>
          </div>
          <div className="skills grid grid-cols-2 items-center gap-y-5 gap-x-5 md:grid-cols-3">
            {skillsDetailsData.map((sdd, index) => (
              <div key={index} className="skill text-center">
                <div className='skill-info flex items-center justify-center'>
                  <img alt='skill icon' src={require(`../assets/images/${sdd.skillIcon}.svg`) || undefined} />
                  {sdd.skillname}</div>
                  <ProgressBar percentage={sdd.skillPercentage} trackWidth={4} />
              </div>
            ))}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='absolute'>
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="var(--green)" />
                  <stop offset="100%" stopColor="var(--blue)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-1">
          <div className='additional-skills-tags'>
            <h2 className='mt-20 text-[1rem] md:text-[2rem] font-black text-[var(--green)]'> Additional Skills</h2>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {
                SkillsData.additionalSkills.map((as, i) => (
                  <li className="mr-1.5 mt-2" key={i}>
                    <div
                      className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-md font-medium leading-5 text-teal-300">
                      {as}</div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills