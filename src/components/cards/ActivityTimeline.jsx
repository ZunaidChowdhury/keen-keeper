import { formatDate } from '@/utils/utils';
import React from 'react'

import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraLight } from 'react-icons/pi';

const ActivityTimeline = ({ activity }) => {
    return (
        <div className='p-4 flex items-center gap-4 bg-foreground rounded-lg border border-gray-200'>
            { activity.type === 'Call' ? React.createElement(LuPhoneCall, { className: 'w-12 h-12' }) : 
                activity.type === 'Text' ? React.createElement(MdOutlineTextsms, { className: 'w-12 h-12' }) : 
                    activity.type === 'Video' ? React.createElement(PiVideoCameraLight, { className: 'w-12 h-12' }) : null
            }
            <div>
                <p className='text-text-secondary text-lg'><span className='text-text-primary text-xl font-medium'>{activity.type}</span> with {activity.friendName}</p>
                <p className='text-text-secondary text-base font-medium'>{formatDate(activity.date)}</p>
            </div>
        </div>
    )
}

export default ActivityTimeline