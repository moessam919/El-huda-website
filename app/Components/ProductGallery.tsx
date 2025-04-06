"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
    imagess: string[];
    productName: string;
}

export default function ProductGallery({
    imagess,
    productName,
}: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(imagess[0]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-square rounded-xl bg-gray-100 overflow-hidden shadow-lg">
                <Image
                    src={selectedImage}
                    alt={productName}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            <div className="grid grid-cols-3 gap-3">
                {imagess.map((image, i) => (
                    <div
                        key={i}
                        className="relative aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image}
                            alt={`${productName} thumbnail ${i + 1}`}
                            fill
                            className={`object-cover transition-opacity ${
                                selectedImage === image
                                    ? "opacity-100 ring-2 ring-[#8AB420]"
                                    : "opacity-70 hover:opacity-100"
                            }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
