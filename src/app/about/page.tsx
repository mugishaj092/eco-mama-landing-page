import OurMission from '@/components/about/our-mission'
import Showcase from '@/components/about/showcase'
import React from 'react'

const page = () => {
  return (
    <div>
      <Showcase />
          <div className='lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-10'>
        <OurMission />
      </div>
    </div>
  )
}

export default page
