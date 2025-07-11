import React from 'react'
import { Link } from 'react-router-dom'
import FaceBook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'


const nav = ({ children }) => {
  return (
    <div>
      <nav className='flex items-center justify-between px-[10rem] sticky top-0 z-50 bg-white shadow py-5'>
            <div className='flex items-center'>
                <div className="bg-black rounded-full w-3 h-3"></div>
                <h1 className='font-bold text-xl'>Lifted Care</h1>
            </div>

            <div className="flex items-center gap-5 text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/webinar">Webinar</Link>
                <Link to="/contact">Contact Us</Link>

                <button className='border-1 border-[#FFC107] px-5 py-1 rounded-sm'>Log in</button>
                <Link to="/registration" className='bg-[#FFC107] text-white px-2 py-1 rounded-sm'>Get Started</Link>
            </div>
      </nav>  

      <main>{children}</main>

      <footer>
        <div className='bg-black text-white pb-10'>
          <div className='flex w-full mx-auto pt-[5rem] gap-[15rem] items-center justify-center'>
            <div className='flex items-center'>
                  <div className="bg-white rounded-full w-3 h-3"></div>
                  <h1 className='font-bold text-xl'>Lifted Care</h1>
            </div>

            <div>
              <p>@2025 CompanyName INC</p>
            </div>

            <div className='flex gap-3'>
              <img src={FaceBook} />
              <img src={Instagram} />
              <img src={Twitter} />
              <img src={Linkedin} />
            </div>
          </div>

          <hr className='w-[71%] mx-auto mt-10 mb-7' />

          <div className='flex items-center gap-[15rem] mx-auto pl-[15%] underline'>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>

            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>

            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default nav;
