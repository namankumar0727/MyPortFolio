
import './SkillSection.css'
import html from '../../Images/stack/HTML.png'
import css from '../../Images/stack/CSS.png'
import js from '../../Images/stack/Javascript.svg'
import tailwind from '../../Images/stack/Tailwind.png'
import react from '../../Images/stack/React.png'
import next from '../../Images/stack/next.svg'
import ts from '../../Images/stack/Typescript.svg'
import bs from '../../Images/stack/Bootstrap.svg'
import git from '../../Images/stack/Git.svg'
import github from '../../Images/stack/Github.svg'

const SkillSection = () => {
  return (
        <section className="skill-section" id="skills">
      <div className="skill-section-content container">
        <div className="skill-fadded-text">skills</div>
        <div className="skill-section-left">
          <h2 className="skill-section-heading">
            <span>M</span>e and <br />MyTech Stack
          </h2>

          <p>
          I am a highly motivated computer science & engineering student with a passion for technology and its application in solving real-world problems. Goal is to work with an organization where I can learn new skills and increase my abilities for the organizational goals as well as myself.
          </p>
<p>
As a tech enthusiast, I'm currently exploring in Software Development, Full Stack Development & pursuing 𝐁.𝐓𝐞𝐜𝐡 from Technocrats Institute of  Technology  and love exploring new technologies.
          </p>
          <p>I am a learning enthusiast and a great problem solver. I have solved more than 800 problems on various coding platforms like codechef,coding ninjas studio,Leetcode and geeks for geeks.</p>
       
        </div>

        <div className="skill-section-right">
          <img
            src="images/userAsset/blob vector.png"
            className="blob-style"
            alt=""
          />
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={next} alt="" />
          <img src={tailwind} alt="" />
          <img src={bs} alt="" />
          <img src={git} alt="" />
          <img src={github} alt="" />
          <img src={ts} alt="" />
        </div>
      </div>
    </section>
  )
}
export default SkillSection