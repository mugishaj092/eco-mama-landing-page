import { images } from '@/utils/constant/images'
import Image from 'next/image'
import React from 'react'

function OurTeam() {
    return (
        <div className="bg-white w-full py-10 sm:py-10 flex flex-col">
            <div className="w-full">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our <span className='text-primary'>Team</span>
                    </h2>
                    <p className="mt-6 leading-2 text-gray-600 text-sm py-4">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
                    </p>
                </div>
                <ul className="flex flex-wrap gap-x-32 max-sm:gap-x-10 max-sm:gap-y-5 gap-y-10 justify-between">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image
                                className="rounded-full h-16 w-16 object-cover"
                                src={images.profile}
                                alt="Profile Picture"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                    Leslie Alexander
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-primary">
                                    Co-Founder / CEO
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default OurTeam;
