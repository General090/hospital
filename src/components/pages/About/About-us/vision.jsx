import React from 'react'
import Group from '../../../../assets/Group-2.png'
import People from '../../../../assets/people.png'

const vision = () => {
  return (
    <>
      <div className='md:flex items-center gap-20 sf-font justify-center mx-auto px-5 md:px-10 lg:px-0 lg:w-[60%] mb-10'>
        <div className='w-[70%] mb-5 md:mb-0 mx-auto md:mx-0'>
            <img src={Group} />
        </div>

        <div>
            <h1 className='font-bold text-2xl mb-5'>Vision</h1>
            <p>To build a mentally resilient Africa where every individual feels seen, supported, and empowered to thrive.</p>
        </div>
      </div>


      <div className='md:flex items-center gap-20 sf-font justify-center mx-auto px-5 md:px-10 lg:px-0 lg:w-[60%] mb-10'>
        <div>
            <h1 className='font-bold text-2xl pb-5'>Mission</h1>
            <p className='mb-5 md:mb-0'>To deliver compassionate, culturally relevant, and tech-enabled mental health care that lifts lives, one conversation, one connection, one community at a time.</p>
        </div>

        <div className='lg:w-[70%] md:w-[80%] mx-auto md:mx-0'>
            <img src={People} className='rounded-xl' /> 
        </div>
      </div>
    </>
  )
}

export default vision
