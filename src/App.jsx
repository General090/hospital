import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About/About-us/About.jsx'
import Home from './components/pages/Home/Home.jsx'
import Webinar from './components/pages/Webinar/Webinar.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import Registration from './components/Auth/Getting-Started/Registration.jsx'
import OurStory from './components/pages/About/Story/ourStory.jsx'
import Login from './components/Auth/Login.jsx'
import GettingStarted from './components/Auth/Getting-Started/GetStarted.jsx'
import MenuIntro from './components/pages/menu/intro/Intro.jsx'
import MenuHome from './components/pages/menu/home/Home.jsx'
import Features from './components/pages/menu/features/Features.jsx'
import Theraphy from './components/pages/menu/features/theraphy/Theraphy.jsx'


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Registration and Getting Started */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/started" element={<GettingStarted />} />

          {/* Menu */}
          <Route path="/menu-intro" element={<MenuIntro />} />
          <Route path="/menu-home" element={<MenuHome />} />
          <Route path="/menu-features" element={<Features />} />

          {/* Features */}
          <Route path="/therapy" element={<Theraphy />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
