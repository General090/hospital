import React from 'react'
import Phone from '../../../assets/Rectangle.png'

const download = () => {
  return (
    <div>
        <div className='bg-[#dcd8d8] py-14'>
            <div className='bg-white flex items-center justify-between w-[50%] mx-auto py-5 px-5 rounded-md'>
                <div>
                    <h1 className='text-xl font-bold'>Download now</h1>
                    <p>To have a better experience download our app</p>
                </div>

                <button className='bg-black px-4 py-2 text-white rounded-sm'>Download</button>
            </div>
        </div>
        
        {/* <img src={Phone} className='w-[18%] -translate-y-[21rem] translate-x-[43rem]' /> */}
    </div>
  )
}

export default download
