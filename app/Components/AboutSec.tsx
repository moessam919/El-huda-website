import Image from "next/image";
import React from "react";

const AboutSec = () => {
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
                    <p className="text-2xl md:text-3xl font-semibold">About</p>
                    <h1 className="text-[#8AB420] text-3xl md:text-6xl font-extrabold">
                        EL HUDA:
                    </h1>
                </div>
            </div>
            <div className="mt-7 md:mt-0">
                <div className="flex flex-col lg:flex-row  items-center justify-center lg:justify-start lg:gap-24">
                    <div className="order-2 lg:order-1 mt-4 lg:mt-0">
                        <Image
                            src="/homeImage.png"
                            alt="icon logo"
                            width={1920}
                            height={1080}
                            className="w-[350px] lg:w-[70rem]"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6 lg:space-y-14 text-xl">
                        <p className="lg:w-[80%]">
                            From 1980,
                            <span className="text-[#8AB420] font-semibold">
                                El-Huda Import & Export
                            </span>{" "}
                            has been a trusted leader in the trade of premium
                            food products, specializing in both import and
                            export.
                        </p>
                        <p className="lg:w-[80%]">
                            We proudly import the finest nuts and Ramadan
                            delicacies from the world&apos;s most reputable
                            suppliers, ensuring that the
                            <span className="text-[#8AB420] font-semibold">
                                Egyptian market receives only the highest
                                quality products at the best prices.
                            </span>
                        </p>
                        <p className="lg:w-[80%]">
                            <span className="text-[#8AB420] font-semibold">
                                At the same time,
                            </span>{" "}
                            we export a carefully selected range of legumes,
                            herbs, and seeds to international markets.
                            maintaining world-class quality standards to ensure
                            that consumers around the experience the rich,
                            authentic flavors of Egyptian produce.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="mt-7 text-xl">
                        {" "}
                        <span className="text-[#8AB420] font-semibold">
                            At El-Huda,
                        </span>{" "}
                        we don&apos;t just trade—we build long-term partnerships
                        based on trust, quality, and mutual success. With a deep
                        understanding of the industry, state-of-the-art cleaning
                        and packaging technology, and a commitment to
                        excellence, we ensure that our products meet and exceed
                        global expectations. With a strong global network and
                        decades of experience, El-Huda continues to expand its
                        international presence, bringing the best of Egypt to
                        the world. Quality, trust, and excellence—this is the
                        El-Huda promise.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;
