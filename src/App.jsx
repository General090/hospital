import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About.jsx'
import Home from './components/pages/Home.jsx'
import Webinar from './components/pages/Webinar.jsx'
import Contact from './components/pages/Contact.jsx'


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
