"use client";

import { MailIcon, MapIcon, PhoneIcon } from "lucide-react";
import dynamic from "next/dynamic";
const MapItem = dynamic(() => import("./map-item"), { ssr: false });

export const MapSection = () => {
  return (
    <div className="bg-whitish w-full h-auto lg:h-[80vh] py-10">
      <div className="h-full w-full max-w-6xl mx-auto px-10 lg:px-0">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full h-full flex flex-col space-y-4 items-start justify-center px-4">
            <h2 className=" text-2xl md:text-4xl lg:text-6xl font-bold text-main">
              Contact Us Now
            </h2>
            <p className="text-lg leading-5 pl-1 font-semibold text-main">
              Vulputate mi sit amet mauris commodo quis. Cras semper auctor
              neque vitae tempus. Sed cras ornare arcu dui vivamus arcu.
            </p>
            <div className="pt-6 flex flex-col space-y-4">
              <div className="flex items-center gap-x-3">
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-main" />
                </div>
                <p className="text-lg font-bold text-main">+88 01882-532360</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-main" />
                </div>
                <p className="text-lg font-bold text-main">
                  imran.contuct@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
                  <MapIcon className="w-6 h-6 text-main" />
                </div>
                <p className="text-lg font-bold text-main">
                  3 Wall Str, New York 10005{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[60vh] lg:h-full">
            <MapItem />
          </div>
        </div>
      </div>
    </div>
  );
};
