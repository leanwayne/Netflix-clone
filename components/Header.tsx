import { useState, useEffect } from 'react';
import {BellIcon, SearchIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {logout} = useAuth()

    useEffect(() => {
        const handleScroll = () => { window.scrollY > 0? setIsScrolled(true) : setIsScrolled(false) }

        window.addEventListener("scroll" , handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    // bg-[#141414]

    return ( 
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">Tv shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">new & popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden sm:inline w-6 h-6'/>
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='h-6 w-6'/>
                {/* <Link href={"/account"}> */}
                    <img
                        onClick={logout}
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                {/* </Link>  */}
            </div>
        </header>
    ) 
  
}
