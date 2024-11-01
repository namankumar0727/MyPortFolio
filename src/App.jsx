import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import SkillSection from './Components/SkillSection/SkillSection'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectSection/>
      <SkillSection/>
      <AboutSection/>
      <Footer/>
    </div>
  )
}
export default App