import React from 'react'
import Img2 from '../../../assets/Group-1.png'
import Img1 from '../../../assets/img1.png'

const operate = () => {
  return (
    <div className="mb-20">
      <div className="bg-[#808080] mb-10">
        <h1 className='text-center text-3xl font-bold py-5'>How we Operate</h1>
      </div>

      <div className="flex items-center w-[70%] mx-auto gap-20 mb-20">
        <img src={Img2} className='w-[40%]' />

        <div>
          <h1 className="font-bold">Get Matched with professional therapist</h1>
          <p>Fill our Simple survey form and let our AI analyze and match you which therapist suits your needs.</p>
        </div>
      </div>


      <div className="flex items-center w-[50%] mx-auto gap-20 mb-20">
        <div>
          <h1 className="font-bold mb-2">Communicate however you feel it</h1>
          <p>Communicate with whatever means you feel comfortable with - Video, Audio, or chat. Anytime, from anywhere from your mobile or desktop.</p>
        </div>

        <img src={Img1} className='w-[40%]' />
      </div>

      <div className="flex items-center w-[50%] mx-auto gap-20">
        <div>
          <h1 className="font-bold mb-2">Tool to aid your Journey</h1>
          <p>Use our extensive available tools to track your progress. access resources and webinars tailored to meet your needs</p>
        </div>
        
        <img src={Img1}  className='w-[40%]' />
      </div>
    </div>
  )
}

export default operate
