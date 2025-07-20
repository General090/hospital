import React from 'react'
import MenuLayout from '../../../../layouts/MenuLayout'
import { CiBookmark } from "react-icons/ci";
import WomanGroup from "../../../../../assets/women-group.png";
import Abigail from "../../../../../assets/abigail.png";
import Hug from "../../../../../assets/hug.png";
import TeamHand from "../../../../../assets/team-hand.png";
import Event from "../../../../../assets/event.png";
import Conference from "../../../../../assets/conf.png";
import Meditation from "../../../../../assets/meditation.png";
import GroupPeople from "../../../../../assets/group-people.png";

const article = () => {

    const features = [
        { id: 1, image: WomanGroup, button: "Read more", saved: CiBookmark },
        { id: 2, image: Abigail, button: "Read more", saved: CiBookmark },
        { id: 3, image: Hug, button: "Read more", saved: CiBookmark },
        { id: 4, image: TeamHand, button: "Read more", saved: CiBookmark },
        { id: 5, image: Event, button: "Read more", saved: CiBookmark },
        { id: 6, image: Conference, button: "Read more", saved: CiBookmark },
        { id: 7, image: Meditation, button: "Read more", saved: CiBookmark },
        { id: 8, image: GroupPeople, button: "Read more", saved: CiBookmark },
        { id: 9, image: TeamHand, button: "Read more", saved: CiBookmark },
    ]

  return (
    <MenuLayout>
        <div className='flex justify-center sf-font mt-20 mb-20 md:px-5 lg:px-0'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                {features.map((feature) => (
                <div key={feature.id} className='relative'>
                    <img src={feature.image} className='w-[100%] h-50 rounded-md border-1 border-[#4B9569]'/>

                    <div className='absolute top-2 right-2 text-white bg-[#4B9569] p-1 text-3xl rounded-md'>
                        <feature.saved />
                    </div>

                    <div className='bg-[#4B9569] py-2 text-center w-[40%] mt-5 rounded-md text-white'>
                        {feature.button}
                    </div>
                </div>

            ))}
            </div>
        </div>
    </MenuLayout>
  )
}

export default article
