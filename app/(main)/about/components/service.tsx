"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export const Service = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-10 md:px-3 h-auto lg:h-[70vh] bg-white py-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        <div className="w-full h-full flex flex-col space-y-3">
          <div className="lg:w-full w-[90%] mx-auto md:mx-0 h-[30vh] lg:h-full relative">
            <Image
              src={"/service/service_01.jpg"}
              alt="Service Image One"
              fill
              className="object-center object-cover rounded-xl"
            />
            <div className="absolute right-4 -bottom-8 border z-50 w-20 h-20 bg-white shadow-md  rounded-full">
              <div className="w-full h-full relative flex items-center justify-center">
                <Image
                  src={"/svg/brush.svg"}
                  alt="Brush"
                  width={55}
                  height={55}
                />
              </div>
            </div>
          </div>
          <h2 className="text-xl pl-4 md:px-0 pt-2 md:text-2xl font-semibold text-main">
            Stomatology Experts
          </h2>
          <p className="text-lg pl-4 md:px-0 leading-5 font-semibold text-main">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit ut wisi
            enimad.
          </p>
        </div>
        <div className="w-full h-full flex flex-col space-y-3">
          <div className="lg:w-full w-[90%] mx-auto md:mx-0 h-[30vh] lg:h-full relative">
            <Image
              src={"/service/service_02.jpg"}
              alt="Service Image One"
              fill
              className="object-center object-cover rounded-xl"
            />
            <div className="absolute right-4 -bottom-8 border z-50 w-20 h-20 bg-white shadow-md  rounded-full">
              <div className="w-full h-full relative flex items-center justify-center">
                <Image
                  src={"/svg/teeth.svg"}
                  alt="Brush"
                  width={55}
                  height={55}
                />
              </div>
            </div>
          </div>
          <h2 className="text-xl pl-4 md:px-0 pt-2 md:text-2xl font-semibold text-main">
            Teeth Bracelet
          </h2>
          <p className="text-lg pl-4 md:px-0 leading-5 font-semibold text-main">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit ut wisi
            enimad.
          </p>
        </div>
        <div className="w-full h-full flex flex-col space-y-3 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-main">Services</h2>
          <div className="w-full h-full flex flex-col space-y-2">
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-main" />
              <p className="text-lg font-semibold">
                Professional dental services 24/7
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-main" />
              <p className="text-lg font-semibold">
                Oral and maxillofacial surgery
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-main" />
              <p className="text-lg font-semibold">
                Dental public health insurance
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-main" />
              <p className="text-lg font-semibold">
                Cosmetic dentistry services
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-main" />
              <p className="text-lg font-semibold">
                Oral and maxillofacial surgery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
