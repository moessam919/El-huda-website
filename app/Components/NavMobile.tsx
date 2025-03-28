"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import navLinks from "../util/navLinks";

export default function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative z-50">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="relative p-2 bg-[#8AB420]/20 hover:bg-[#8AB420]/30 transition-all duration-300"
            >
                <Menu size={24} className="text-[#296628]" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={toggleMenu}
                        />

                        {/* Menu Slide-in */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                            }}
                            className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl  overflow-hidden"
                        >
                            <div className="bg-[#8AB420] text-white p-6 flex items-center justify-between">
                                <h2 className="text-xl font-bold">El Huda</h2>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 rounded-full hover:bg-white/20 transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="p-6 space-y-4">
                                {navLinks.map(({ name, path }) => (
                                    <Link
                                        key={name}
                                        href={path}
                                        className={`
                                            block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300
                                            ${
                                                pathname === path
                                                    ? "bg-[#8AB420] text-white"
                                                    : "text-[#296628] hover:bg-[#8AB420]/10 hover:text-[#8AB420]"
                                            }
                                        `}
                                        onClick={toggleMenu}
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Social Icons */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="text-[#296628] hover:text-[#8AB420] transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-[#296628] hover:text-[#8AB420] transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line
                                            x1="17.5"
                                            x2="17.51"
                                            y1="6.5"
                                            y2="6.5"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-[#296628] hover:text-[#8AB420] transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
