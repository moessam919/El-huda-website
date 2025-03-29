import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "El Huda - Contact",
    description: "Contact page for El Huda Copmany",
};

const page = () => {
    return (
        <div className="w-full">
            {/* Banner Section with Beans/Legumes Background */}
            <div className="relative w-full h-[400px] bg-gradient-to-t from-[#000000] to-[#8AB420]">
                <Image
                    src="/ContactImage.png"
                    alt="Various beans and legumes"
                    className="w-full h-full object-cover opacity-70"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <div className="flex items-center text-white">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/AboutUs" className="hover:underline">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className=" py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Quick Contact Column */}
                        <div>
                            <div className="mb-6">
                                <span className="text-gray-600 uppercase tracking-wider text-sm font-medium">
                                    QUICK CONTACT
                                </span>
                                <div className="h-1 w-16 bg-green-700 mt-2 mb-6"></div>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Contacts
                            </h2>

                            {/* Location Information */}
                            <div className="flex items-center mb-8">
                                <div className="mr-4">
                                    <div className="bg-white p-3 rounded-lg shadow-md">
                                        <Image
                                            src="/map.png"
                                            alt="Various beans and legumes"
                                            className="w-[40px] h-full object-cover opacity-70"
                                            width={1920}
                                            height={1080}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-xl mb-2">
                                        Location
                                    </h3>
                                    <p className="text-gray-700">
                                        16 old customs St. Alexandria - egypt
                                    </p>
                                </div>
                            </div>

                            {/* Telephone Information */}
                            <div className="flex items-center mb-8">
                                <div className="mr-4">
                                    <div className="bg-white p-3 rounded-lg shadow-md">
                                        <Image
                                            src="/call.png"
                                            alt="Various beans and legumes"
                                            className="w-[40px] h-full object-cover opacity-70"
                                            width={1920}
                                            height={1080}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-xl mb-2">
                                        Telephone
                                    </h3>
                                    <p className="text-gray-700">
                                        <a
                                            href="tel:+201105635202"
                                            className="hover:underline"
                                        >
                                            (+20) 1105635202
                                        </a>{" "}
                                        -{" "}
                                        <a
                                            href="tel:+20122789925"
                                            className="hover:underline"
                                        >
                                            (+20) 0122789925
                                        </a>
                                    </p>
                                    <p className="text-gray-700">
                                        <a
                                            href="tel:+2034830788"
                                            className="hover:underline"
                                        >
                                            (+203) 4830788D
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="mr-4">
                                    <div className="bg-white p-3 rounded-lg shadow-md">
                                        <Image
                                            src="/email.png"
                                            alt="Various beans and legumes"
                                            className="w-[40px] h-full object-cover opacity-70"
                                            width={1920}
                                            height={1080}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-xl mb-2">
                                        Email
                                    </h3>
                                    <p className="text-gray-700">
                                        <a
                                            href="mailto:info@elhudacompany.com"
                                            className="hover:underline"
                                        >
                                            info@elhudacompany.com
                                        </a>
                                    </p>
                                    <p className="text-gray-700">
                                        <a
                                            href="mailto:sales@elhudacompany.com"
                                            className="hover:underline"
                                        >
                                            sales@elhudacompany.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Map Column */}
                        <div>
                            <div className="mb-6">
                                <span className="text-gray-600 uppercase tracking-wider text-sm font-medium">
                                    LET&apos;`S CONNECT
                                </span>
                                <div className="h-1 w-16 bg-green-700 mt-2 mb-6"></div>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Location
                            </h2>

                            {/* Map Placeholder */}
                            <div className="bg-white p-2 rounded shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
