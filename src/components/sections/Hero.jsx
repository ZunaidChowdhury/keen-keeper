import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const Hero = () => {
    return (
        // container
        <div className=' px-4  max-w-285.5 mx-auto  pt-10 tablet:pt-20 flex flex-col items-center '>
            <h2 className='text-center text-text-primary text-4xl tablet:text-5xl font-bold mb-4'>
                Friends to keep close in your life
            </h2>
            <p className='text-text-secondary mb-8 text-center'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>

            <button
                className={`btn px-4 py-3 text-base font-semibold bg-theme-primary text-white mb-10`}
            >
                <IoMdAdd className='w-6 h-5' />
                Add a Friend
            </button>

            {/* dashboard cards */}
            <div className='w-full grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* c1 */}
                <div className=' bg-foreground rounded-lg p-8 text-center  shadow-md border border-gray-200'>
                    <h3 className='text-theme-primary text-[2rem] font-semibold m-0'>
                        10
                    </h3>
                    <p className='text-text-secondary text-lg'>
                        Total Friends
                    </p>
                </div>

                {/* c2 */}
                <div className=' bg-foreground rounded-lg p-8 text-center  shadow-md border border-gray-200'>
                    <h3 className='text-theme-primary text-[2rem] font-semibold m-0'>
                        3
                    </h3>
                    <p className='text-text-secondary text-lg'>
                        On Track
                    </p>
                </div>

                {/* c3 */}
                <div className=' bg-foreground rounded-lg p-8 text-center  shadow-md border border-gray-200'>
                    <h3 className='text-theme-primary text-[2rem] font-semibold m-0'>
                        6
                    </h3>
                    <p className='text-text-secondary text-lg'>
                        Need Attention
                    </p>
                </div>

                {/* c4 */}
                <div className=' bg-foreground rounded-lg p-8 text-center  shadow-md border border-gray-200'>
                    <h3 className='text-theme-primary text-[2rem] font-semibold m-0'>
                        12
                    </h3>
                    <p className='text-text-secondary text-lg'>
                        Interactions This Month
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero