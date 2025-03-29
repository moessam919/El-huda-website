import { mainProducts, otherProducts } from "@/app/data/products";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "El Huda - Products",
    description: "Products page for El Huda Copmany",
};

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Products */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Import & Export
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {mainProducts.map((product) => (
                            <li
                                key={product.id}
                                className="rounded-lg overflow-hidden group"
                            >
                                <Link
                                    href={`/Products/${product.id}`}
                                    className="block relative"
                                >
                                    <div className="relative">
                                        <Image
                                            src={product.image}
                                            alt={`${product.name}`}
                                            width={400}
                                            height={400}
                                            className="w-full object-cover rounded-lg h-[300px]"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-[#0A3B27] group-hover:bg-[#8AB420] text-white p-2 px-4 text-center rounded-b-lg transition-all duration-150 ">
                                            {product.name}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other Products */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Other Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {otherProducts.map((product) => (
                            <div
                                key={product.id}
                                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-800 hover:bg-[#8AB420] hover:text-white text-center"
                            >
                                {product.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
