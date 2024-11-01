import navlogo from '../../Images/userAsset/NavLogo.png'
import './Header.css';

const Header = () => {
    return (
        <header className="container">
        <div className="logo-div">
          <img src={navlogo} alt="" />
          <span className="name">aman Kumar</span>
        </div>
  
        <nav className="nav-div">
          <ul>
            <li><a href="#projects">projects</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#contact">contact me</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
