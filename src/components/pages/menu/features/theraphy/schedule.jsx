import React from 'react'
import MenuLayout from '../../../../layouts/MenuLayout'

const schedule = () => {
  return (
    <MenuLayout>
        <div className='sf-font mt-10'>
            <div className='px-10'>
                <h1 className='font-bold italic pb-2'>Let’s finalize your match</h1>
                <div className='italic'>
                    <p>We’re almost there! A few more details will help us find the best therapist for you.</p>
                    <p>We will do our best to match you with the right therapist at your preferred time.</p>
                </div>

                <p className='text-[#4B9569] pb-5 pt-10'>When will you be available</p>
            </div>

            <div className='bg-[#4B9569] py-5' />
        </div>
    </MenuLayout>
  )
}

export default schedule
