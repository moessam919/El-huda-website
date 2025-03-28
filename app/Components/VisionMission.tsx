import React from "react";
import { ArrowRight } from "lucide-react";

const VisionMission: React.FC = () => {
    return (
        <section className="bg-[#1A3321] text-white py-5 mb-14">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 text-center">
                    {/* Vision Section */}
                    <div className="bg-[#1A3321] p-6 rounded-lg relative ">
                        <h2 className="text-2xl font-bold text-[#8AB420] mb-4 uppercase tracking-wider ">
                            Our Vision
                        </h2>
                        <p className="text-white/90 leading-relaxed ">
                            At El-Huda Import & Export, we envision becoming a
                            global leader in exporting premium Egyptian legumes,
                            herbs, and seeds, ensuring they reach international
                            markets with exceptional quality and reliability.{" "}
                        </p>
                        <div className="absolute -bottom-16 left-55 sm:left-30 lg:left-45 xl:left-80   mr-4">
                            <div className="bg-[#1A3321] rounded-full p-6 inline-block">
                                <ArrowRight
                                    className="text-[#8AB420]"
                                    size={29}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-[#1A3321] p-6 rounded-lg relative">
                        <h2 className="text-2xl font-bold text-[#8AB420] mb-4  uppercase tracking-wider ">
                            Our Mission
                        </h2>
                        <p className="text-white/90 leading-relaxed ">
                            At El-Huda Import & Export, our mission is to
                            deliver the finest Egyptian agricultural products to
                            the world with unmatched quality, reliability, and
                            excellence.
                        </p>
                        <div className="absolute -bottom-16 left-55 sm:left-30 lg:left-45 xl:left-80   mr-4">
                            <div className="bg-[#1A3321] rounded-full p-6 inline-block">
                                <ArrowRight
                                    className="text-[#8AB420]"
                                    size={29}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
