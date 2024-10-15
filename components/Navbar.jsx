"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/img/Kayson_Logo_Final.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md py-4 md:py-4 px-10 md:px-28">
            <div className="container mx-auto flex justify-between items-center">
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image src={logo} alt="Logo" className="w-36 h-24" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-10 text-xl font-semibold text-black">
                    <li>
                        <Link href="/" className="cursor-pointer hover:text-gray-900">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="cursor-pointer">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/presence" className="cursor-pointer">
                            Presence
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="cursor-pointer">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="cursor-pointer">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <XIcon className="h-8 w-8 text-black" />
                        ) : (
                            <MenuIcon className="h-8 w-8 text-black" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-orange-500 bg-opacity-95 z-50">
                    <ul className="flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold py-20 px-6">
                        <li>
                            <Link href="/" onClick={toggleMenu} className="hover:underline hover:text-gray-300 transition-all duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" onClick={toggleMenu} className="hover:underline hover:text-gray-300 transition-all duration-300">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/presence" onClick={toggleMenu} className="hover:underline hover:text-gray-300 transition-all duration-300">
                                Presence
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={toggleMenu} className="hover:underline hover:text-gray-300 transition-all duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={toggleMenu} className="hover:underline hover:text-gray-300 transition-all duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
