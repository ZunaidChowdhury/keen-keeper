'use client'

import React, { startTransition, use, useEffect, useMemo, useState, useTransition } from 'react'
import ActivityTimeline from '@/components/cards/ActivityTimeline';
import { GlobalContext } from '@/contexts/GlobalContext';
import { LuChevronDown } from "react-icons/lu";
import NoDataCard from './cards/NoDataCard';

const TimelineContent = () => {

    const { userActivity } = use(GlobalContext);

    const [sortByDateOldest, setSortByDateOldest] = useState(false);

    const [searchList, setSearchList] = useState(false);

    // searching
    const [query, setQuery] = useState('')
    const [isPending, startTransition] = useTransition()
    const [filterText, setFilterText] = useState('')

    // filter by date in descending - default behaviour
    const [filteredActivityList, setFilteredActivityList] = useState(() => {
        return [...userActivity].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    const handleFilter = (type) => {
        setSearchList(false)
        if (type === 'all') {
            let sorted = [...userActivity];
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            setFilteredActivityList(sorted);

        }
        else if (type === 'text') {
            setFilteredActivityList(userActivity.filter(activity => activity.type === 'Text'));
            // console.log(filteredActivityList);
        }
        else if (type === 'call') {
            setFilteredActivityList(userActivity.filter(activity => activity.type === 'Call'));
        }
        else if (type === 'video') {
            setFilteredActivityList(userActivity.filter(activity => activity.type === 'Video'));
        }
        else if (type === 'date') {


            if (sortByDateOldest) {

                let sorted = [...filteredActivityList];
                sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
                setFilteredActivityList(sorted);
            }
            else if (!sortByDateOldest) {
                // newest first
                let sorted = [...filteredActivityList];
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
                setFilteredActivityList(sorted);
            }
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)

        startTransition(() => {
            setFilterText(value) // triggers usememo
        })
    }

    const filteredList = useMemo(() => {
        if (!filterText.trim()) return filteredActivityList
        setSearchList(true)
        const searchLower = filterText.toLowerCase()    // cream

        return userActivity.filter((item) =>
            item.friendName.toLowerCase().includes(searchLower) ||      // cream
            item.type.toLowerCase().includes(searchLower)
        )
    }, [filterText])


    return (
        <div>
            {/* dropdown  */}
            <div className='mb-6 flex items-center justify-between'>
                <div className="dropdown dropdown-start ">
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
                        <li ><button onClick={() => handleFilter('all')} className='text-lg font-medium px-2 py-2'>All</button></li>
                        <li ><button onClick={() => handleFilter('text')} className='text-lg font-medium px-2 py-2'>Text</button></li>
                        <li><button onClick={() => handleFilter('call')} className='text-lg font-medium px-2 py-2'>Call</button></li>
                        <li><button onClick={() => handleFilter('video')} className='text-lg font-medium px-2 py-2'>Video</button></li>
                        <li><button onClick={() => { setSortByDateOldest(!sortByDateOldest); handleFilter('date') }} className='text-lg font-medium px-2 py-2'>Date {sortByDateOldest === true ? '[Newest]' : '[Oldest]'}</button></li>
                    </ul>
                </div>

                {/* search box */}
                <div
                    className="flex  items-center w-full tablet:max-w-[18.75rem] h-[2.75rem] border border-[#e4e4e7FF] rounded-[.25rem] p-4 focus-within:border-theme-primary transition-all duration-300"
                >
                    {/* Search Icon */}
                    <svg
                        className="w-4 h-4 text-text-secondary mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>

                    {/* Input Field */}
                    <input
                        value={query}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search friend or call type..."
                        className="w-full text-base font-normal border-none focus:outline-none text-text-primary placeholder-text-secondary"
                    />
                </div>
            </div>


            {/* activity list container  */}
            {
                userActivity.length > 0 ? <div className='space-y-6'>
                    {
                        searchList === true ? filteredList.length > 0 ? filteredList.map((activity, i) => (
                            <ActivityTimeline key={i} activity={activity} />
                        )) : <div className='bg-foreground rounded-lg shadow-sm border border-gray-200 p-8'>
                            <NoDataCard title='Nothing matched...' description='Try something else?' />
                        </div> :
                            filteredActivityList?.map((activity, i) => (
                                <ActivityTimeline key={i} activity={activity} />
                            ))
                    }
                </div> : <div className='bg-foreground rounded-lg shadow-sm border border-gray-200 p-8'>
                    <NoDataCard title='No interaction history yet' description='All of your interactions will appear here.' />
                </div>
            }
        </div>

    )
}

export default TimelineContent