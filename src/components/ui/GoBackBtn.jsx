'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const GoBackBtn = () => {
      const router = useRouter()
  return (
    <button onClick={() => router.back()}
            className="cursor-pointer w-full sm:w-auto px-8 py-4 border border-neutral-800 font-medium rounded-xl hover:bg-neutral-900 transition-all duration-300 text-neutral-300">
      Go Back
    </button>
  )
}

export default GoBackBtn










