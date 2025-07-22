import React from 'react'
import { Link } from 'react-router-dom'
import MenuLayout from '../../../../layouts/MenuLayout'

const Journal = () => {
  return (
    <MenuLayout>
        <div className='h-screen flex flex-col items-center justify-center  space-y-20'>
           <p className='text-[#4B956980]'>Monday, 24, September</p> 
           <h1 className='font-bold text-2xl'>Good Morning, <span className='pacifico text-[#FFC107]'>Johnson!</span></h1>
           <Link to="/journal-written" className='bg-[#4B9569] w-[50%] lg:w-[20%] text-center py-2 rounded-md text-white'>Start your first Journal</Link>
        </div>
    </MenuLayout>
  )
}

export default Journal
