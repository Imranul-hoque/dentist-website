"use client";

import Image from "next/image";

export const Banner = () => {
    return (
        <div className="w-full h-[30vh] lg:h-[60vh] relative">
          <Image src={"/contact.jpg"} alt="Conatct" fill />
          <div className="absolute backdrop-blur-sm w-full h-full top-0 left-0 flex items-center justify-center">
            <p className="text-3xl lg:text-5xl font-semibold text-white">
              Contact us
            </p>
          </div>
        </div>
    );
}