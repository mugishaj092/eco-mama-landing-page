import { icons } from '@/utils/constant/icons'
import { images } from '@/utils/constant/images'
import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 mt-20 bg-[#f4f5f4] py-10 flex justify-center gap-20 max-sm:py-10 max-md:flex-wrap w-full'>
            <div className='w-1/2 flex flex-col justify-between max-md:w-full'>
                <div>
                    <h1 className='text-3xl font-bold text-primary max-md:text-center mb-5'>Why Choose Us?</h1>
                    <p className='text-sm text-gray-500'>Our team of experts is highly knowledgeable about all aspects of digital marketing and has experience helping businesses achieve their goals. We strive to stay ahead of industry trends so we can give our clients the best results possible.</p>
                </div>
                <Image src={images.profile} alt='whychooseus' height={345} />
                <div>
                    <Button type="primary" className='custom-btn' style={{ padding: '20px 45px', boxShadow: 'none' }}>Get In Touch</Button>
                </div>
            </div>
            <div className='w-1/2 flex flex-col gap-4 max-md:w-full'>
                <div className='flex justify-between gap-4 max-sm:flex-wrap'>
                    <div className='bg-[#004fb627] p-8 max-sm:p-4 rounded-xl drop-shadow-sm hover:drop-shadow-md flex gap-4 flex-col w-[100%]'>
                        <Image src={icons.team} alt='team' />
                        <div className='flex gap-2 flex-col'>
                            <h1 className='font-bold'>Experienced Team</h1>
                            <p className='text-sm text-gray-500'>We've got a stellar team with polished skills and high profiles.</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 max-sm:p-4 rounded-xl drop-shadow-sm hover:drop-shadow-md flex gap-4 flex-col w-[100%]'>
                        <Image src={icons.service} alt='team' />
                        <div className='flex gap-2 flex-col'>
                            <h1 className='font-bold'>Service You Can Rely On</h1>
                            <p className='text-sm text-gray-500'>By responding to our client's needs, we provide them with reliable and applicable services.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4 max-sm:flex-wrap'>
                    <div className='bg-white p-8 max-sm:p-4 rounded-xl drop-shadow-sm hover:drop-shadow-md flex gap-4 flex-col w-[100%]'>
                        <Image src={icons.hours} alt='team' />
                        <div className='flex gap-2 flex-col'>
                            <h1 className='font-bold'>24/7 Support</h1>
                            <p className='text-sm text-gray-500'>we have a strong customer support platform to serve our customer 24/7.</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 max-sm:p-4 rounded-xl drop-shadow-sm hover:drop-shadow-md flex gap-4 flex-col w-[100%]'>
                        <Image src={icons.growth} alt='team' />
                        <div className='flex gap-2 flex-col'>
                            <h1 className='font-bold'>Sustainable Growth</h1>
                            <p className='text-sm text-gray-500'>Sustainable growth in digital marketing involves creating a long-term strategy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
