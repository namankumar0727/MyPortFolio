import  { useEffect } from 'react';
import Typed from 'typed.js';
import userimage from '../../Images/userAsset/UserImage.jpg';
import zigzags from '../../Images/userAsset/zigzags.png';
import plus from '../../Images/userAsset/plus.png';
import cube from '../../Images/userAsset/cube.png';
import circle from '../../Images/userAsset/circle.png';
import dots from '../../Images/userAsset/dots.png';
import './HeroSection.css';

const HeroSection = () => {

    function onclickhandler(){
        window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTthgtnXrzxtmQpxbjKBtxhtrMXbzstvBFvWMCVDbkVZKXSWMhWvVPbNQQjtzxPfWTLxvc"
    }
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".role", {
      strings: [
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section container">
      <div className="faded-text">Naman Kumar</div>

      <div className="hero-section-left">
        <h1 className="name">Hi! Naman Kumar</h1>
        <p className="profession">
          I am a <span className="role"></span>
        </p>
        <p className="desc">
          I’m a software developer and here is my portfolio website. Here you’ll
          learn about my journey as a software developer.
        </p>
        <button className="btn" onClick={onclickhandler}>Hire me</button>
      </div>

      <div className="hero-section-right">
        <div className="my-image">
          <img src={userimage} alt="User" />
        </div>
        <div className="icon-zigzag">
          <img src={zigzags} alt="Zigzags" />
        </div>
        <div className="icon-plus">
          <img src={plus} alt="Plus" />
        </div>
        <div className="icon-cube">
          <img src={cube} alt="Cube" />
        </div>
        <div className="icon-circle">
          <img src={circle} alt="Circle" />
        </div>
        <div className="icon-dots">
          <img src={dots} alt="Dots" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
