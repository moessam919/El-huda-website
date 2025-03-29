"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full shadow-sm z-50 transition-all duration-500 ease-in-out">
            {/* Social Icons Section - يخفي عند التمرير */}
            <div
                className={`bg-gradient-to-r from-[#296628] to-[#8AB420] transition-all duration-500 ease-in-out ${
                    isScrolled
                        ? "opacity-0 h-0 overflow-hidden"
                        : "opacity-100 h-auto py-3"
                }`}
            >
                <div className="container mx-auto px-4 flex justify-end gap-2">
                    <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="p-1 rounded-full size-7 md:size-9 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Image
                                src="/face.png"
                                alt="icon logo"
                                width={1920}
                                height={1080}
                                className="md:w-30"
                            />
                        </div>
                    </Link>

                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="p-1 rounded-full size-7 md:size-9 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Image
                                src="/Insta.png"
                                alt="icon logo"
                                width={50}
                                height={40}
                                className="md:w-30"
                            />
                        </div>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="p-1 rounded-full size-7 md:size-9 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Image
                                src="/Link.png"
                                alt="icon logo"
                                width={50}
                                height={40}
                                className="md:w-30"
                            />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Navigation Section */}
            <div
                className={`bg-white transition-all duration-500 ease-in-out ${
                    isScrolled ? "py-2" : "py-4"
                }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Image
                        src="/logo.png"
                        alt="logo image"
                        width={74}
                        height={74}
                        className={`transition-all duration-500 ease-in-out  ${
                            isScrolled ? "md:w-16" : "md:w-24"
                        }`}
                    />

                    <div>
                        {/* nav for phone */}
                        <div className="md:hidden">
                            <NavMobile />
                        </div>

                        {/* nav for desktop */}
                        <div className="hidden md:block">
                            <NavDesktop isScrolled={isScrolled} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
