import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About/About-us/About.jsx'
import Home from './components/pages/Home/Home.jsx'
import Webinar from './components/pages/Webinar/Webinar.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import Registration from './components/Auth/Getting-Started/Registration.jsx'
import OurStory from './components/pages/About/Story/ourStory.jsx'


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
          <Route path="/registration" element={<Registration />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
