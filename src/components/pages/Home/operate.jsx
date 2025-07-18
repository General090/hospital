import React from 'react'
import Img2 from '../../../assets/Group-1.png'
import Img1 from '../../../assets/img1.png'
import Health from '../../../assets/health.png'
import Hand from '../../../assets/hand.png'

const operate = () => {
  return (
    <div className='mb-10'>
      <div className="bg-[#4B9569] text-white py-5 mb-10">
        <h1 className='text-center text-3xl font-bold mb-10 lg:mb-5'>How we Operate</h1>

        <div className="md:flex items-center md:[100%] lg:w-[70%] md:mx-auto gap-20 px-5 lg:px-0">
          <img src={Img2} className='w-[50%] mx-auto md:mx-0 md:w-[30%] lg:w-[40%] mb-10 lg:mb-0' />

          <div className='lg:w-[50%]'>
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl pb-5">Get Matched with professional therapist</h1>
            <p className='text-xl'>Fill our Simple survey form and let our AI analyze and match you which therapist suits your needs.</p>
          </div>
        </div>
    </div>


      <div className="md:flex items-center lg:w-[50%] px-5 lg:px-0 lg:mx-auto gap-20 mb-20">
        <img src={Img1} className="w-full rounded-md block md:hidden mb-5" />

        <div>
          <h1 className="font-bold mb-2 text-xl">Communicate however you feel it</h1>
          <p className='text-sm'>Communicate with whatever means you feel comfortable with - Video, Audio, or chat. Anytime, from anywhere from your mobile or desktop.</p>
        </div>

        <img src={Health} className='w-[40%] rounded-sm h-52 hidden md:block' />
      </div>

      <div className="md:flex items-center lg:w-[50%] px-5 lg:px-0 mx-auto gap-20">

        <img src={Hand}  className='w-full h-80 rounded-md block md:hidden mb-5 ' />

        <div>
          <h1 className="font-bold mb-2 text-xl">Tool to aid your Journey</h1>
          <p className='text-sm'>Use our extensive available tools to track your progress. access resources and webinars tailored to meet your needs</p>
        </div>
        
        <img src={Hand}  className='lg:w-[90%] md:w-[80%] h-52 rounded-sm hidden md:block' />
      </div>

   </div>   
  )
}

export default operate
