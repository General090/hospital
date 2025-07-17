import React from 'react'
import Nav from '../../layouts/nav'
import LearnMore from '../../Props/Button/LearnMore'

const webinar = () => {
  return (
    <Nav>
      <div className='sf-font bg-[#4B9569] h-[70vh]'>
        <div className='w-[50%] mx-auto text-center text-white justify-center'>
          <h1 className='font-bold text-2xl'>Mental Health Events & Webinars</h1>
          <p>Nurture your mind with the latest mental health events and webinars featuring industry experts, benefits leaders, and health therapist</p>
          <LearnMore />
        </div>
      </div>
    </Nav>
  )
}

export default webinar
