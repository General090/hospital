import React from 'react'
import MenuLayout from '../../../layouts/MenuLayout'
import Meditation from '../../../../assets/med.png'
import Theraphy from '../../../../assets/theraphy.png'
import Journal from '../../../../assets/book.png'
import Article from '../../../../assets/news.png'
import Music from '../../../../assets/music.png'
import Webiner from '../../../../assets/web.png'
import Games from '../../../../assets/dice.png'
import PodCast from '../../../../assets/pod.png'
import Challenges from '../../../../assets/cha.png'
import Affirmation from '../../../../assets/aff.png'
import Market from '../../../../assets/cart.png'
import Group from '../../../../assets/team.png'
import { Link } from 'react-router-dom'

const Features = () => {
    const features = [
        { id: 1, image: Meditation, title: "Meditaion" },
        { id: 2, image: Theraphy, title: "Theraphy", path: "/theraphy" },
        { id: 3, image: Journal, title: "Journal" },
        { id: 4, image: Article, title: "Articles" },
        { id: 5, image: Music, title: "Music" },
        { id: 6, image: Webiner, title: "Webiners" },
        { id: 7, image: Games, title: "Games" },
        { id: 8, image: PodCast, title: "Podcast" },
        { id: 9, image: Challenges, title: "Challenges" },
        { id: 10, image: Affirmation, title: "Affirmations" },
        { id: 11, image: Market, title: "Market" },
        { id: 12, image: Group, title: "Group" },
    ]

  return (
    <MenuLayout>
         <div className="jarkata grid grid-cols-1 md:grid-cols-4 gap-10 pt-20 pb-20 px-5 lg:px-20 text-black">
                {features.map((feature) => (
                  <Link
                    key={feature.id}
                    className="mx-auto bg-[#FED36180] rounded-xl p-10 relative"
                    to={feature.path}
                  >
                    <img
                      src={feature.image}
                      className="rounded-t-xl md:w-20"
                    />
                    <div className='translate-y-17 font-bold text-center'>
                      {feature.title}
                    </div>
                  </Link>
                ))}
          </div>
    </MenuLayout>
  )
}

export default Features
