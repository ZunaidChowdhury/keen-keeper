'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    // wrapper
    <div className=" bg-gray-200 text-text-primary py-20">
      {/* container */}
      <div className="w-full max-w-277.5 mx-auto p-20 text-center bg-foreground rounded-lg shadow-sm border border-gray-100">

        <h2 className="text-9xl font-semibold text-text-primary mb-10">404</h2>

        {/* Clear, bold heading */}
        <h4 className="text-3xl font-semibold tracking-tight text-text-primary mb-3">
          Page not found.
        </h4>

        {/* Simple, helpful subtext */}
        <p className="text-lg text-neutral-500 max-w-md mx-auto leading-tight mb-10 ">
          It might have been moved or deleted. Check the address and try again.
        </p>

        {/* Apple-esque Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Link
            href="/"
            className="w-38.75 inline-flex items-center justify-center px-6 py-3 rounded-full bg-theme-primary text-white font-medium hover:bg-[#0e4e12] transition-colors"
          >
            Home Page
          </Link>
          <button
            onClick={() => router.back()}
            className="cursor-pointer w-38.75 inline-flex items-center justify-center px-6 py-3 rounded-full bg-neutral-100 text-text-primary font-medium hover:bg-neutral-200 transition-colors"
          >
            Previous Page
          </button>
        </div>
      </div>
    </div>
  )
}
