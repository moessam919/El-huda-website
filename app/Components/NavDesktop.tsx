"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "../util/navLinks";

export default function NavDesktop() {
    const pathname = usePathname();

    return (
        <nav className={`hidden md:flex gap-6 `}>
            {navLinks.map(({ name, path }) => (
                <Link
                    key={name}
                    href={path}
                    className={`px-4 py-2 rounded-lg ${
                        pathname === path
                            ? "bg-[#8AB420] text-white"
                            : "hover:bg-[#8AB420] hover:text-white"
                    }`}
                >
                    {name}
                </Link>
            ))}
        </nav>
    );
}
