import { icons } from '@/utils/constant/icons'
import Image from 'next/image'
import React from 'react'

const OurMission = () => {
  return (
    <div>
      <div>
        <Image src={icons.rocket} alt="our mission" />
        <span>Our Mission</span>
      </div>
    </div>
  )
}

export default OurMission
