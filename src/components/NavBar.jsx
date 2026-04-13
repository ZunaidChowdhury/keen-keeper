'use client'
import brandLogo from "../../public/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { IoIosStats } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";

const navBtnActive = 'bg-theme-primary text-white'
const navBtnInactive = 'bg-transparent  text-text-secondary border-none shadow-none'


const NavBar = () => {
    const pathname = usePathname()

    return (
        // wrapper 
        <div className='w-full bg-foreground border-b border-b-zinc-300 py-4'>
            {/* container */}
            <nav className='max-w-[90rem] mx-auto flex justify-between items-center'>
                {/* left  */}
                <Link href='/'>
                    <Image
                        className='shrink-0'
                        src={brandLogo}
                        width={141}
                        height={29}
                        alt="Picture of the author"
                    />
                </Link>

                {/* right  */}
                <div className='flex items-center'>
                    <Link
                        href="/"
                        className={`btn px-4 py-3 text-base font-semibold ${pathname === '/' ? navBtnActive : navBtnInactive}`}
                    >
                        <RiHome2Line className='w-6 h-5' />
                        Home
                    </Link>
                                        <Link
                        href="/timeline"
                        className={`btn px-4 py-3 text-base font-semibold ${pathname === '/timeline' ? navBtnActive : navBtnInactive}`}
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
                    {/* <button className="">Primary</button> */}

                </div>
            </nav>
        </div>
    )
}

export default NavBar