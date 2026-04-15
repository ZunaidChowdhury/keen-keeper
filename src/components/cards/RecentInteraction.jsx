import React from 'react'
import { MdOutlineTextsms } from 'react-icons/md'

const RecentInteraction = ({ interaction }) => {
    // const Icon = interaction.icon;
    return (
        <div className='p-4 flex justify-between items-center'>
            {/* left */}
            <div className='flex items-center gap-3'>
                {/* <Icon className= 'w-8 h-8'/> */}
                {React.createElement(interaction.icon, { className: 'w-8 h-8' })}
                <div>
                    <p className='text-text-primary text-lg font-semibold'>{interaction.iType}</p>
                    <p className='text-text-secondary text-base'>{interaction.details}</p>
                </div>
            </div>

            {/* right */}
            <p className='text-text-secondary text-sm'>{interaction.date}</p>
        </div>
    )
}

export default RecentInteraction