'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { IoIosStats } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";

const navBtnActive = 'bg-theme-primary text-white'
const navBtnInactive = 'bg-transparent  text-text-secondary border-none shadow-none hover:bg-gray-200 hover:text-text-primary' 


const NavBar = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const pathname = usePathname()

    return (
        // wrapper 
        <div className='sticky top-0 z-100 w-full bg-foreground border-b border-b-zinc-300 py-4'>
            {/* container */}
            <nav className='px-4 max-w-368 mx-auto flex justify-between items-center'>
                {/* left  */}
                <Link className='shrink-0' href='/'>
                    <Image
                        src='/assets/logo.png'
                        width={140}
                        height={30}
                        alt="Picture of the author"
                        priority

                    />
                </Link>

                {/* right  */}
                <div className='flex items-center'>
                    <div className='hidden md:inline'>
                        <Link
                            href="/"
                            className={`btn px-4 py-3 text-base font-semibold ${pathname === '/' ? navBtnActive : navBtnInactive}`}
                        >
                            <RiHome2Line className='w-6 h-5' />
                            Home
                        </Link>

                        <Link
                            href="/timeline"
                            className={`btn px-4 py-3 text-base font-semibold  ${pathname === '/timeline' ? navBtnActive : navBtnInactive}`}
                        >
                            <LuClock3 className='w-6 h-5' />
                            Timeline
                        </Link>

                        <Link
                            href="/stats"
                            className={`btn px-4 py-3 text-base font-semibold ${pathname === '/stats' ? navBtnActive : navBtnInactive}`}
                        >
                            <IoIosStats className='w-6 h-5' />
                            Stats
                        </Link>
                    </div>

                    {/* hamburger */}
                    <button onClick={() => { setOpenMobileNav(!openMobileNav) }} className='md:hidden hover:bg-gray-100 p-1.5 rounded-full transition-all duration-300 cursor-pointer'>
                        < svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg >
                    </button>
                    {/* <button className="">Primary</button> */}

                </div>
            </nav>

            {/* mobile nav  */}
            {
                openMobileNav && <div
                    className='p-2 z-101 border border-gray-300 border-b-2 border-b-theme-primary absolute right-0 top-14 rounded-lg  w-50 flex flex-col 
                                 md:hidden bg-foreground'>
                    <Link
                        href="/"
                        className={`btn px-4 py-3 text-base font-semibold  flex items-center justify-start ${pathname === '/' ? navBtnActive : navBtnInactive}`}
                    >
                        <RiHome2Line className='w-6 h-5' />
                        Home
                    </Link>

                    <Link
                        href="/timeline"
                        className={`btn px-4 py-3 text-base font-semibold  flex items-center justify-start ${pathname === '/timeline' ? navBtnActive : navBtnInactive}`}
                    >
                        <LuClock3 className='w-6 h-5' />
                        Timeline
                    </Link>

                    <Link
                        href="/stats"
                        className={`btn px-4 py-3 text-base font-semibold  flex items-center justify-start ${pathname === '/stats' ? navBtnActive : navBtnInactive}`}
                    >
                        <IoIosStats className='w-6 h-5' />
                        Stats
                    </Link>
                </div>
            }
        </div>
    )
}

export default NavBar