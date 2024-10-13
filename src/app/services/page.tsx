import React from 'react';

const Page = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-10 lg:px-20 max-sm:px-5 max-md:px-10 md:px-10 py-4'>
            <div className='w-full lg:w-1/2'>
                <div>
                    <span className="text-xl font-bold text-primary">What We Serve</span>
                    <h1 className='text-3xl md:text-4xl font-bold'>We help women overcome mental health challenges caused by climate change.</h1>
                    <p className="mt-4 text-gray-500 text-sm md:text-base">
                        Our platform provides support and resources for women affected by climate-related stressors, offering mental health assessments, educational tools, and self-care tips to build resilience and promote well-being.
                    </p>
                </div>
                <div>
                    <div className='w-full rounded-tl-3xl rounded-br-3xl bg-primary/15 p-4 h-52'>
                        {/* Add any content or image here if necessary */}
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                <div className='w-full'>
                    <div className='rounded-tl-3xl rounded-br-3xl bg-primary/15 p-4'>
                        <h1 className='text-xl text-primary pb-4 font-bold'>Online Counseling</h1>
                        <p className='text-sm md:text-base'>Our online counseling service offers women direct access to licensed therapists, providing support for managing mental health challenges caused by climate change. Whether you're facing stress, anxiety, or depression due to displacement, drought, or other environmental changes, our counselors are here to help. Available anytime and from anywhere, these secure, one-on-one virtual sessions provide personalized care tailored to your unique needs, ensuring that mental health support is always within reach, no matter your location or situation.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className='w-full lg:w-1/2 rounded-tl-2xl rounded-br-2xl bg-primary/15 p-4'>
                        <h1 className='text-xl text-primary pb-4 font-bold'>Online Counseling</h1>
                        <p className='text-sm md:text-base'>We offer online counseling services to help women overcome mental health challenges caused by climate change.</p>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-tl-2xl rounded-br-2xl p-4'>
                        <h1 className='text-xl text-primary pb-4 font-bold'>AI-Driven Mental Health Assessment</h1>
                        <p className='text-sm md:text-base'>We provide a platform to help women overcome mental health challenges caused by climate change.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
