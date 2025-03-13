'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Check if the current page is the Home page
    const isHomePage = pathname === '/';

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 150) { // Change 100 to the desired scroll height
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Add scroll event listener on component mount
    useEffect(() => {
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isHomePage]);

    // Determine the background color based on the page and scroll position
    const navbarBackgroundClass = isHomePage
        ? isScrolled
            ? 'bg-white shadow-lg' // Background color after scrolling on Home page
            : 'bg-transparent text-gray-50' // Transparent background initially on Home page
        : 'bg-white shadow-lg'; // Solid background on other pages

    return (
        <nav
            className={`px-10 h-16 top-0 left-0 w-full flex items-center justify-between fixed ${navbarBackgroundClass} z-20 transition-colors duration-500`}>
            <Link href="/"
            > <Image className="w-16 h-10 cursor-pointer rounded-full" src="/logo.jpg" alt="Logo" width={20} height={20} />
            </Link>

            <ul className="flex space-x-6 ">
                <li><Link href="/"
                    className="font-semibold rounded-lg px-4 py-[4px] hover:bg-white hover:text-black transition duration-500">Home</Link>
                </li>
                <li><Link href="/about"
                    className=" font-semibold rounded-lg px-4 py-[4px] hover:bg-white hover:text-black transition duration-500">About
                </Link>
                </li>
                <li><Link href="/services"
                    className=" font-semibold rounded-lg px-4 py-[4px] hover:bg-white hover:text-black transition duration-500">Services</Link>
                </li>
                <li><Link href="/contact"
                    className=" font-semibold rounded-lg px-4 py-[4px] hover:bg-white hover:text-black transition duration-500">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

