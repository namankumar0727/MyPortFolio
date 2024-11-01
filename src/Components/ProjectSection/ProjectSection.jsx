import './ProjectSection.css'
import html from '../../Images/stack/HTML.png'
import css from '../../Images/stack/CSS.png'
import js from '../../Images/stack/Javascript.svg'
import tailwind from '../../Images/stack/Tailwind.png'
import project1 from '../../Images/projects/Project1.png'
import project2 from '../../Images/projects/Project2.png'
import project3 from '../../Images/projects/Project3.png'
import project4 from '../../Images/projects/Project4.png'

const ProjectSection = () => {

    function onclickhandler1() {
        window.location.href = "https://frolicking-valkyrie-555c36.netlify.app";
      }
    function onclickhandler2() {
        window.location.href = "https://sidcupfamilyclone123.netlify.app/";
      }
    function onclickhandler3() {
        window.location.href = "https://razorpaylone123.netlify.app/ ";
      }
    function onclickhandler4() {
        window.location.href = "https://parallaxwebsite123.netlify.app";
      }
  return (
        <section className="project-section" id="projects">
      <h2 className="project-header">projects</h2>

      <div className="project-container container">
       
        <div style={{ backgroundImage:`url(${project1})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh',width:'90%'}} className="project-card" id="project-1">
          <div className="project-number">01</div>
          <div className="project-content">
           
            <div className="project-skills-container">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" /> 
            </div>

            <h2>Lazarev Clone</h2>

            <p>
            Developed a elegant clone of the Lazarev website
 using HTML, CSS, and JavaScript to replicate the design and
 functionality of the original site. 
            </p>

            <div className="project-buttons">
              <button onClick={onclickhandler1} className="btn">View site</button>
              
            </div>
          </div>
        </div>
        <div style={{ backgroundImage:`url(${project2})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh',width:'90%'}}className="project-card" id="project-2">
          <div className="project-number">02</div>
          <div  className="project-content">
            <div className="project-skills-container">
            <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>

            <h2>Sidcup Family Golf Clone</h2>

            <p>Created a visually appealing and user-friendly website
 layout that reflects the family-friendly atmosphere of
 Sidcup Family Golf </p>

            <div className="project-buttons">
              <button onClick={onclickhandler2} className="btn">View site</button>
              
            </div>
          </div>
        </div>
        <div style={{ backgroundImage:`url(${project3})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh',width:'90%'}} className="project-card" id="project-3">
          <div className="project-number">03</div>
          <div className="project-content">
            <div className="project-skills-container">
            <img src={html} alt="" />
            <img src={tailwind} alt="" />
            </div>

            <h2>Razorpay Clone</h2>

            <p>
            Developed a static Razorpay clone interface using HTML
 and Tailwind CSS, replicating the design and layout by
 minimalistic styling. 
            </p>

            <div className="project-buttons">
              <button onClick={onclickhandler3} className="btn">View site</button>
              
            </div>
          </div>
        </div>
    
        <div style={{ backgroundImage:`url(${project4})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh',width:'90%'}} className="project-card" id="project-4">
          <div className="project-number">04</div>
          <div className="project-content">
            <div className="project-skills-container">
            <img src={html} alt="" />
              <img src={css} alt="" />
              
            </div>

            <h2>Parallax Website</h2>

            <p>
              A website which has a parallax effect in which different things on the site moves with different speed
            </p>

            <div className="project-buttons">
              <button onClick={onclickhandler4} className="btn">View site</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProjectSection