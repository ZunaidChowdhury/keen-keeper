'use client'

import React from 'react'

const NoDataCard = ({ title, description }) => {
    return (
        <div className='w-full h-full max-w-350 mx-auto rounded-lg px-4 py-12 tablet:px-8  tablet:py-24 flex flex-col justify-center items-center'>

            <img className='w-20 tablet:w-40' src={`/no-data.png`} alt="no data" />

            <h3 className='mt-6 text-2xl font-semibold text-center'>
                {title}
            </h3>

            <p className='text-xl text-text-secondary font-normal text-center'>
                {description}
            </p>

        </div>

    )
}

export default NoDataCard


