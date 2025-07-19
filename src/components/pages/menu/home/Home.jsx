import React from 'react'
import MenuLayout from '../../../layouts/MenuLayout'
import Sun from '../../../../assets/sun.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <MenuLayout>
      <div className='roboto px-5 lg:px-20 mt-10 md:mt-52 lg:mt-20 mb-60'>
        <div className="md:flex items-center gap-20">

          {/* Mobile image */}
            <div className="md:hidden block mb-5">
                <img src={Sun} className="rounded-t-xl" />
            </div>

            <div>
                <p>Welcome.</p>
                <p>Empowering Mental Wellness with Human Care and Smart Technology</p>
                <p>We provide secure, affordable, and culturally attuned mental health support across Africa—delivered by experienced professionals and enhanced by AI for faster, personalized care.</p>
                <p>Take just two minutes to complete this form so we can match you with the right support system. Once you’re done, our care team will reach out to begin your journey.</p>
                <p>✔️ Trusted by thousands of individuals across Africa</p>
                <p>✔️ Therapist and coach matches powered by AI and human insight</p>
                <p>✔️ Culturally aware and locally trained professionals</p>
                <p>✔️ Accessible via mobile, even in low-bandwidth areas</p>
            </div>

            {/* Desktop image */}
            <div className='hidden md:block'>
                <img src={Sun} className="rounded-t-xl" />
            </div>
        </div>

        <div className="flex justify-end">
              <Link to="/menu-features" className="block bg-[#4B9569] w-[50%] lg:w-[15%] font-bold text-white py-2 rounded mt-10 mb-10 text-center">Continue</Link>
        </div>
      </div>
        
    </MenuLayout>
  )
}

export default Home
