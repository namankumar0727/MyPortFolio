import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {

    function onclickhandlerlinkedin(){
        window.location.href = "https://www.linkedin.com/in/naman-kumar-2707n05/"
    }
    function onclickhandleremail(){
        window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTthgtnXrzxtmQpxbjKBtxhtrMXbzstvBFvWMCVDbkVZKXSWMhWvVPbNQQjtzxPfWTLxvc"
    }
    function onclickhandlergithub(){
        window.location.href = "https://github.com/namankumar0727"
    }
  return (
    
    <footer>
      <div className="footer-content container">
        <div className="footer-fadded-text">Naman Kumar</div>

        <nav className="nav-div">
          <ul>
            <li><a href="#projects">projects</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#contact">contact me</a></li>
          </ul>
        </nav>

        <div className="social-icons">
          <FaLinkedin onClick={onclickhandlerlinkedin} className="fa-brands fa-linkedin icon"/>
          <FaGithub onClick={onclickhandlergithub} className="fa-brands fa-github icon"/>

          
          <FaEnvelope onClick={onclickhandleremail} className="fa-regular fa-envelope icon"/>
          
        </div>
      </div>
    </footer>
  )
}
export default Footer