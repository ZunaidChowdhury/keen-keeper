'use client'

import React, { useContext } from 'react'
import { GlobalContext } from '@/contexts/GlobalContext';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraLight } from 'react-icons/pi';

const Interactions = ({friend}) => {
    const { handleCall, handleText, handleVideo } = useContext(GlobalContext);

    return (
        <>
            <button onClick={() => handleCall(friend)} className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <LuPhoneCall className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Call</span>
            </button>

            <button onClick={() => handleText(friend)} className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <MdOutlineTextsms className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Text</span>
            </button>

            <button onClick={() => handleVideo(friend)} className='text-text-primary hover:text-white  cursor-pointer flex flex-col items-center justify-center  w-full bg-background hover:bg-theme-primary transition-all  duration-300 active:translate-y-[2px] rounded-lg border border-gray-200  py-4 '>
                <PiVideoCameraLight className=' w-8 h-8 mb-2' />
                <span className='text-lg'>Video</span>
            </button>
        </>
    )
}

export default Interactions