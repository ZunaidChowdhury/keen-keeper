'use client'

import React, { use, useState } from 'react'
import ActivityTimeline from '@/components/cards/ActivityTimeline';
import { GlobalContext } from '@/contexts/GlobalContext';
import { LuChevronDown } from "react-icons/lu";

const TimelineContent = () => {

    const { userActivity } = use(GlobalContext);

    let filteredActivityList = userActivity;

    const [currentFilter, setcurrentFilter] = useState(null);

    if (currentFilter === 'text') {
        filteredActivityList = filteredActivityList.filter(activity => activity.type === 'Text');
    }
    else if (currentFilter === 'call') {
        filteredActivityList = filteredActivityList.filter(activity => activity.type === 'Call');
    }
    else if (currentFilter === 'video') {
        filteredActivityList = filteredActivityList.filter(activity => activity.type === 'Video');
    }


    return (
        <div>
            {/* dropdown  */}
            <div className="dropdown dropdown-start mb-6">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 w-85 text-lg font-medium flex justify-between items-center px-4 py-6 bg-white border-neutral-200 hover:bg-neutral-50 text-left"
                >
                    <span>Filter timeline</span>
                    <LuChevronDown className="w-5 h-5 opacity-60" />
                </div>

                <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-85 border border-neutral-100"
                >
                    <li ><button onClick={() => setcurrentFilter('text')} className='text-lg font-medium px-2 py-2'>Text</button></li>
                    <li><button onClick={() => setcurrentFilter('call')} className='text-lg font-medium px-2 py-2'>Call</button></li>
                    <li><button onClick={() => setcurrentFilter('video')} className='text-lg font-medium px-2 py-2'>Video</button></li>
                </ul>
            </div>

            {/* activity list container  */}
            <div className='space-y-6'>
                {
                    filteredActivityList.map((activity, i) => (
                        <ActivityTimeline key={i} activity={activity} />
                    ))
                }
            </div>
        </div>

    )
}

export default TimelineContent