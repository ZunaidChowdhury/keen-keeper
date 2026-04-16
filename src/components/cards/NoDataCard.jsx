'use client'

import React from 'react'

const NoDataCard = ({ title, description }) => {
    return (
        <div className='w-full max-w-350 mx-auto bg-zinc-100 rounded-lg p-20 flex flex-col justify-center items-center'>

            <img className='w-40' src={`/no-data.png`} alt="no data" />

            <h3 className='mt-6 text-2xl font-semibold'>
                {title}
            </h3>

            <p className='text-xl text-text-secondary font-normal'>
                {description}
            </p>

        </div>

    )
}

export default NoDataCard


