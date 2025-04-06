import { MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#296628] to-[#8AB420] ">
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="gap-3 grid">
                    <h2 className="text-xl text-white font-semibold">
                        Contact <span className="text-[#F9D454]">Info:</span>
                    </h2>
                    <div className="flex gap-3 items-center">
                        <MapPin className="text-[#F9D454]" />

                        <p className="text-white">
                            16 old customs St.
                            <br /> Alexandria - egypt
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Phone className="text-[#F9D454]" />
                        <p className="text-white">
                            (+20) 1105635202 - (+20) 01227899251 <br /> (+203)
                            4830788
                        </p>
                    </div>
                </div>
                <div className="gap-3 grid">
                    <h2 className="text-xl text-white font-semibold">
                        Opening <span className="text-[#F9D454]">Time:</span>
                    </h2>

                    <div className="flex gap-3 items-center">
                        <p className="text-white">
                            From Sunday to <br /> Thursday
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <p className="text-white">
                            Saturday and Friday <br /> Are our vacation
                        </p>
                    </div>
                </div>
                <div className="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426.56257820152535!2d29.8810753!3d31.2068568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c171310c18ed%3A0xe9141308daf25ce2!2sAl%20Dahab%20Foul!5e0!3m2!1sar!2seg!4v1743943923269!5m2!1sar!2seg"
                        width="80%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
