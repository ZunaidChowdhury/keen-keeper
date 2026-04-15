'use client'
import React, { createContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [userActivity, setUserActivity] = useState([])


    const handleCall = (friend) => {
        const newData = {
            type: 'Call',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, newData]);

        toast.success(`Call with ${friend.name}`);
    }

    const handleText = (friend) => {
        const newData = {
            type: 'Text',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, newData]);

        toast.success(`Text with ${friend.name}`);
    }

    
    const handleVideo = (friend) => {
        const newData = {
            type: 'Video',
            friendName: friend.name,
            date: new Date().toISOString(),
        }

        setUserActivity([...userActivity, newData]);

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

        console.log('context data: ', userActivity);
        // const localReadlist = getReadlistFromLocalStorage();
        // setReadBooks(localReadlist);
        // const localWishlist = getWishlistFromLocalStorage();
        // setWishBooks(localWishlist)

    })

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider