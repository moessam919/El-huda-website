import Image from "next/image";
import React from "react";

const WhyChooseSec = () => {
    return (
        <div className="container mx-auto px-4 p-3 my-15">
            <div className="flex gap-6 items-center justify-center lg:justify-start">
                <Image
                    src="/IconLogo.png"
                    alt="icon logo"
                    width={50}
                    height={40}
                    className="md:w-20"
                />

                <div className="flex flex-col  ">
                    <p className="text-2xl md:text-3xl font-semibold">
                        Way Choose
                    </p>
                    <h1 className="text-[#8AB420] text-3xl md:text-6xl font-extrabold">
                        EL HUDA:
                    </h1>
                </div>
            </div>

            <div className="mt-4 space-y-4">
                <p className="text-lg max-w-5xl mx-auto">
                    With decades of experience{" "}
                    <span className="text-[#8AB420] font-semibold">
                        El-Huda Import & Export
                    </span>{" "}
                    stands out as a trusted name in exporting premium Egyptian
                    legumes, herbs, and seeds. Our commitment to exceptional
                    quality, advanced processing, and reliable service ensures
                    that every product meets international standards and exceeds
                    customer expectations.
                </p>
                <p className="text-lg max-w-5xl mx-auto">
                    <span className="text-[#8AB420] font-semibold">
                        No matter how many companies
                    </span>{" "}
                    export legumes and herbs from Egypt, once you experience
                    A1-Huda&apos;s quality, professionalism, and dedication, we
                    will become your first and only choice. With ethical
                    sourcing, competitive pricing, and long-term partnership
                    values,
                    <span className="text-[#8AB420] font-semibold">
                        we don&apos;t just deliver products—we deliver trust and
                        excellence.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WhyChooseSec;
