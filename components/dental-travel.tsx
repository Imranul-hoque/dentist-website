"use client";

import Image from "next/image";

export const DentalTravel = () => {
  return (
    <div className="bg-white py-10 pb-10">
      <p className="text-center text-3xl lg:text-5xl font-semibold text-[#013A65]">
        Your Dental Travel
      </p>
      <div className="max-w-6xl mx-auto px-10 lg:px-0 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full text-center">
          <div className="w-full flex flex-col gap-y-2 items-center justify-center">
            <div className="relative w-full h-[50vh] md:w-40 md:h-40 rounded-tl-full rounded-tr-full rounded-bl-full overflow-hidden border-2 border-[#013A65]">
              <Image
                src={"/image_01.jpg"}
                alt="First Image"
                fill
                className="scale-100 hover:scale-105 transition duration-500"
              />
            </div>
            <p className="text-xl font-bold tracking-tight text-[#013A65] ">
              Accomodation
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full md:w-40 h-[50vh] md:h-40 rounded-full overflow-hidden">
              <Image
                src={"/image_02.png"}
                alt="First Image"
                fill
                className="transition duration-500 scale-100 hover:scale-105"
              />
            </div>
            <p className="text-xl font-bold tracking-tight text-[#013A65] ">
              Schedule
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full md:w-40 h-[50vh] md:h-40 rounded-full overflow-hidden">
              <Image
                src={"/image_03.jpg"}
                alt="First Image"
                fill
                className="transition duration-500 scale-100 hover:scale-105"
              />
            </div>
            <p className="text-xl font-bold tracking-tight text-[#013A65] ">
              Explore
            </p>
          </div>
          <div className="w-full flex-col flex items-center justify-center">
            <div className="relative w-full md:w-40 h-[50vh] md:h-40 rounded-tl-full rounded-bl-full rounded-br-full overflow-hidden">
              <Image
                className="transition duration-500 scale-100 hover:scale-105"
                src={"/image_04.jpg"}
                alt="First Image"
                fill
              />
            </div>
            <p className="text-xl font-bold tracking-tight text-[#013A65] ">
              Plane Ticket
            </p>
          </div>
          <div className="w-full flex-col flex items-center justify-center">
            <div className="relative w-full md:w-40 h-[50vh] md:h-40 rounded-tl-2xl rounded-br-2xl overflow-hidden">
              <Image
                className="transition duration-500 scale-100 hover:scale-105"
                src={"/image_05.jpg"}
                alt="First Image"
                fill
              />
            </div>
            <p className="text-xl font-bold tracking-tight text-[#013A65] ">
              Transfort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
