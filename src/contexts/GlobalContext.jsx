'use client'
import { getActivityFromLocalStorage, saveActivityToLocalStorage } from '@/utils/localStorage';
import React, { createContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [userActivity, setUserActivity] = useState([])


    const handleCall = (friend) => {
        const activity = {
            type: 'Call',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, activity]);
        saveActivityToLocalStorage(activity);
        toast.success(`Call with ${friend.name}`);
    }

    const handleText = (friend) => {
        const activity = {
            type: 'Text',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, activity]);
        saveActivityToLocalStorage(activity);
        toast.success(`Text with ${friend.name}`);
    }


    const handleVideo = (friend) => {
        const activity = {
            type: 'Video',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, activity]);
        saveActivityToLocalStorage(activity);
        toast.success(`Video with ${friend.name}`);
    }

    const data = {
        userActivity,
        setUserActivity,
        handleCall,
        handleText,
        handleVideo
    };

    useEffect(() => {
        const userActivity = getActivityFromLocalStorage();
        setUserActivity(userActivity);
        // console.log('context data: ', userActivity);
    }, [])


    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider