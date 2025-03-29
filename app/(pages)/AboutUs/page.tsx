import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "El Huda - About Us",
    description: "About Us page for El Huda Copmany",
};
const page = () => {
    return (
        <div className="mt-10  ">
            <div className="flex gap-6 items-center justify-center lg:justify-start container mx-auto px-4 p-3">
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

            <div className="mt-7 md:mt-0 container mx-auto px-4 p-3">
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
                        decades of experience, A1-Huda continues to expand its
                        international presence, bringing the best of Egypt to
                        the world. Quality, trust, and excellence—this is the
                        El-Huda promise.{" "}
                    </p>
                </div>
            </div>

            <div className="relative w-full  mx-auto my-20 ">
                {/* Main container with dark green background */}
                <div className="bg-green-950 text-white p-10 pt-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Section */}
                        <div className="text-center px-4">
                            <h2 className="text-[#8AB420] text-2xl font-medium mb-4">
                                Our Vision
                            </h2>
                            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                                <span className="text-[#8AB420] font-semibold">
                                    At El-Huda Import & Export,
                                </span>{" "}
                                we envision becoming a global leader in
                                exporting premium Egyptian legumes, herbs, and
                                seeds, ensuring they reach international markets
                                with exceptional quality and reliability. We
                                strive to establish Egyptian agricultural
                                products as a preferred choice worldwide by
                                upholding the highest standards in sourcing,
                                processing, and packaging. Through sustainable
                                practices, innovation, and strong partnerships,
                                we aim to expand our global footprint,
                                delivering excellence while promoting the rich
                                heritage of Egyptian produce.
                            </p>
                        </div>

                        {/* Mission Section */}
                        <div className="text-center px-4">
                            <h2 className="text-[#8AB420] text-2xl font-medium mb-4">
                                Our Mission
                            </h2>
                            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                                <span className="text-[#8AB420] font-semibold">
                                    At El-Huda Import & Export,
                                </span>{" "}
                                our mission is to deliver the finest Egyptian
                                agricultural products to the world with
                                unmatched quality, reliability, and excellence.
                                With decades of experience, we have perfected
                                the art of sourcing, processing, and exporting
                                premium legumes, herbs, and seeds, ensuring they
                                meet global standards. Our goal is to showcase
                                the richness of Egyptian produce, making it a
                                preferred choice worldwide. We are dedicated to
                                building long-term partnerships, offering
                                competitive prices, superior quality, and
                                exceptional service, while continuously
                                innovating to meet the evolving needs of our
                                customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Circular icons positioned at top */}
                <div className="absolute top-0 left-0 right-0 flex justify-around transform -translate-y-1/2">
                    <div className="bg-green-950 rounded-full p-4 flex items-center justify-center">
                        <div className=" rounded-full p-1">
                            <Image
                                src="/OurVision.png"
                                alt="icon logo"
                                width={1920}
                                height={1080}
                                className="w-[30px] lg:w-[65px]"
                            />{" "}
                        </div>
                    </div>
                    <div className="bg-green-950 rounded-full p-4 flex items-center justify-center">
                        <div className=" rounded-full p-1">
                            <Image
                                src="/OurMission.png"
                                alt="icon logo"
                                width={1920}
                                height={1080}
                                className="w-[30px] lg:w-[65px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
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
                            Our
                        </p>
                        <h1 className="text-[#8AB420] text-3xl md:text-6xl font-extrabold">
                            Valuse:
                        </h1>
                    </div>
                </div>

                <div className="mt-4 space-y-4">
                    <p className="text-lg max-w-5xl mx-auto">
                        <span className="text-[#8AB420] font-semibold">
                            At El-Huda Import & Export,{" "}
                        </span>{" "}
                        we are committed to excellence in every step of our
                        journey, Integrity and transparency guide our business,
                        ensuring strong and trustworthy relationships with our
                        partners. Quality is at the heart of everything we do,
                        as we meticulously select and process our prcducts to
                        meet international standards. Innovation drives us
                        forward, allowing us to enhance efficiency and deliver
                        the best to our customers. Sustainability is our
                        responsibility, we prioritize eco-friendly practices and
                        ethical sourcing, Customer satisfaction remains our
                        ultimate goal, as we strive to build lasting
                        partnerships based on reliability, consistency, and
                        mutual success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
