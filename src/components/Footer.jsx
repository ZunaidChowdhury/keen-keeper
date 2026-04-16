import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import instagramImg from '../../public/assets/instagram.png'
import facebookImg from '../../public/assets/facebook.png'
import twitterImg from '../../public/assets/twitter.png'

const Footer = () => {
    return (
        // wrapper
        <div className='w-full bg-theme-primary pt-20 pb-7.5'>
            {/* container */}
            <div className='px-4  max-w-285.5 mx-auto text-white'>
                {/* top */}
                <div className='mb-10 flex flex-col justify-center items-center'>
                    <h3 className='text-white text-7xl font-bold w-fit mb-4'>
                        Keen<span className='font-medium'>Keeper</span>
                    </h3>
                    <p className='text-base mb-6 opacity-70'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <h5 className='text-xl font-medium mb-4'>
                        Social Links
                    </h5>
                    <div className='flex items-center gap-3'>
                        <Link href='/'>
                            <Image
                                className='shrink-0'
                                src={instagramImg}
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>

                        <Link href='/'>
                            <Image
                                className='shrink-0'
                                src={facebookImg}
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>

                        <Link href='/'>
                            <Image
                                className='shrink-0'
                                src={twitterImg}
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>
                </div>

                <div className='w-full h-px bg-white opacity-30 mb-7' />

                {/* bottom*/}
                <div className='text-white text-base flex items-center justify-between'>
                    <p className='opacity-50'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-8'>
                        <Link href={`/`} className='opacity-50 hover:opacity-100 hover:underline transition-all duration-300'>Privacy Policy</Link>
                        <Link href={`/`} className='opacity-50 hover:opacity-100 hover:underline transition-all duration-300'>Terms of Service</Link>
                        <Link href={`/`} className='opacity-50 hover:opacity-100 hover:underline transition-all duration-300'>Cookies</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer