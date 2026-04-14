'use client'
import React from 'react'
import { RingLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="max-w-277.5 mx-auto h-60 mb-20 flex items-center justify-center">
            <RingLoader color="#00ff19" />
        </div>
    )
}

export default Spinner