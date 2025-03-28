import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Header = () => {
    return (
        <div className="fixed top-0 w-full shadow-sm z-50">
            {/* Social Icons Section */}
            <div className="bg-gradient-to-r from-[#296628] to-[#8AB420]">
                <div className="container mx-auto px-4 flex justify-end gap-2 py-3">
                    <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-white p-1 rounded-full size-7 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Facebook className="text-[#296628] size-5" />
                        </div>
                    </Link>

                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-white p-1 rounded-full size-7 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Instagram className="text-[#296628] size-5" />
                        </div>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="bg-white p-1 rounded-full size-7 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <Linkedin className="text-[#296628] size-5" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="bg-white py-4">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <Image
                        src="/logo.png"
                        alt="logo image"
                        width={74}
                        height={74}
                        className="md:w-24"
                    />

                    <div>
                        {/* nav for phone */}
                        <div className="md:hidden">
                            <NavMobile />
                        </div>

                        {/* nav for desktop */}
                        <div className="hidden md:block">
                            <NavDesktop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
