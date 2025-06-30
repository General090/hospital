import React from 'react'
import Nav from '../../layouts/nav.jsx'
import Img1 from '../../../assets/img1.png'
import Operate from '../Home/operate.jsx'
import Download from '../Home/download.jsx'
import Theraphy from '../Home/therapy.jsx'

const Home = () => {
  return (
    <Nav>
      <div>
        <div className='bg-[#E4E4E4] py-[6rem] text-center space-y'>
          <div className='w-[30%] mx-auto space-y-4'>
            <h1 className='font-bold text-3xl'>Your Journey to Wellness Stay Here</h1>
            <p>Personalized therapy, culturally aware support, and intelligent tools at your fingertips.</p>
            <button className='bg-black px-4 py-2 text-white rounded-sm'>Learn more</button>
          </div>
        </div>

        <div className='flex items-center py-5 w-[50%] mx-auto gap-10'>
          <div className='flex flex-col items-center gap-5'>
            <p>Our platform combines expert care, AI-driven tools, and a supportive community to help you heal, grow, and live fully.</p>
            <button className='bg-black px-4 py-2 text-white rounded-sm'>Get Started</button>
          </div>

          <img src={Img1} className='w-[40%]' />
        </div>
      </div>

      <Operate />
      <Download />
      <Theraphy />
    </Nav>
  )
}

export default Home
