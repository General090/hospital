import React from 'react'
import Phone from '../../../assets/Rectangle.png'

const download = () => {
  return (
    <div className='bg-[#FED361] py-14 mb-10'>
      <div className='relative'>
        <img
            src={Phone}
            alt="Phone"
            className='w-[18%] absolute -top-20 left-[58%] -translate-x-1/2 z-20'
        />
        <div className='bg-white flex items-center justify-between py-5 px-5 rounded-md relative z-10 w-[50%] mx-auto'>
            <div className='sf-font'>
              <h1 className='text-[36px] font-bold'>Download now</h1>
              <p className='text-[12px] md:text-[14px] lg:text-[17px]'>To have a better experience download our app</p>
            </div>

            <button className='bg-black px-4 py-2 text-white rounded-sm'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default download
