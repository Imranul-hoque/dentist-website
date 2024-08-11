"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const Benefits = () => {
  return (
    <div className="w-full h-full md:h-[70vh] bg-white pb-10 md:pb-0">
      <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-y-2 w-full">
        <div className="w-full h-full flex gap-x-3 items-center justify-center">
          <Image
            src={"/benefits-image_01.png"}
            alt="Benefits_Image"
            width={200}
            height={200}
            className="bounce-animation"
          />
          <Image
            src={"/benefits-image_02.png"}
            alt="Benefits_Image"
            width={200}
            height={200}
            className="pt-[250px] bounce-animation"
          />
        </div>
        <div className="w-full md:h-full  flex flex-col space-y-2 items-start justify-center px-10 md:px-0">
          <h2 className="text-3xl md:text-5xl font-bold text-main">
            What You Get
          </h2>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Prevents cavities and tooth decay.
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Removes plaque and tartar buildup.
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Reduces risk of gum disease.
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Improves overall health and wellness.
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Boosts confidence with a bright smile.
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-main">
            <Check className="w-5 h-5" />
            <p className="font-semibold text-lg">
              Prevents bad breath, keeping mouth healthy.
            </p>
          </div>
          <Button className="bg-main px-8 py-6 text-white rounded-tl-2xl rounded-br-2xl hover:rounded-br-none hover:rounded-tl-none transition-all duration-500">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};
