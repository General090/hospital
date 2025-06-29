import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const nav = ({ children }) => {
  return (
    <div>
      <nav className='flex items-center justify-between px-[10rem] py-5'>
            <div className='flex items-center'>
                <div className="bg-black rounded-full w-3 h-3"></div>
                <h1 className='font-bold text-xl'>Lifted Care</h1>
            </div>

            <div className="flex items-center gap-5 text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/webinar">Webinar</Link>
                <Link to="/contact">Contact Us</Link>

                <button className='border-1 border-black px-5 py-1 rounded-sm'>Log in</button>
                <button className='bg-black text-white px-2 py-1 rounded-sm'>Get Started</button>
            </div>
      </nav>  

      <main>{children}</main>

      <footer>
        <div className='bg-black text-white'>
          <div className='flex px-[10rem] gap-[20rem] items-center justify-center'>
            <div className='flex items-center'>
                  <div className="bg-white rounded-full w-3 h-3"></div>
                  <h1 className='font-bold text-xl'>Lifted Care</h1>
            </div>

            <div>
              <p>@2025 CompanyName INC</p>
            </div>

            <div className='flex'>
              <FaLinkedin />
              <FaXTwitter />
            </div>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default nav;
