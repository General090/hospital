import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom"
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const MenuLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sf-font'>
      <nav className='flex items-center justify-between bg-[#4B9569] text-white p-5 font-bold sticky top-0 z-50'>
        <div className='flex items-center gap-2'>
          <CgProfile />
          <h1>Johnson Richard</h1>
        </div>

        <div className='md:flex items-center gap-10 hidden'>
          <div className='flex items-center gap-2'>
            <IoMdMenu className='text-[#FFC107]'/>
            <Link to="/">Menu</Link>
          </div>

          <div className='flex items-center gap-2'>
            <IoMdNotificationsOutline className='text-[#FFC107]' />
            <Link to="/">Notification</Link>
          </div>

          <div className='flex items-center gap-2'>
            <IoSettingsOutline className='text-[#FFC107]' />
            <Link to="/">Setting</Link>
          </div>

          <div className='flex items-center gap-2'>
            <Link to="/">Logout</Link>
            <IoIosLogOut className='text-[#FFC107]' />
          </div>
        </div>

        <div className='block md:hidden'>
          <button onClick={handleClick}>
            {isOpen ? (
              <IoMdClose className='text-2xl' />
            ) : (
              <IoMdMenu className='text-2xl' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden flex flex-col px-5 py-4 bg-white shadow space-y-3">
            <Link to="/">Menu</Link>

            <Link to="/">Notification</Link>

            <Link to="/">Setting</Link>

            <Link to="/login">Logout</Link>
        </div>
        )}

      <main>{children}</main>


      <footer>
        <div className="bg-black text-white pb-10 px-5 md:px-0">
          <div className="md:flex w-full space-y-3 md:space-y-3 mx-auto pt-[5rem] md:gap-[5rem] lg:gap-[15rem] items-center justify-center">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-3 h-3"></div>
              <h1 className="font-bold text-xl">Lifted Care</h1>
            </div>

            <div>
              <p>@2025 CompanyName INC</p>
            </div>

            <div className="flex gap-3">
              <img src={FaceBook} />
              <img src={Instagram} />
              <img src={Twitter} />
              <img src={Linkedin} />
            </div>
          </div>

          <hr className="lg:w-[71%] md:mx-10 lg:mx-auto mt-10 mb-7" />

          <div className="flex items-center gap-[15rem] mx-auto md:pl-[15%] underline">
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

export default MenuLayout
