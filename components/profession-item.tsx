"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const ProfessionItem = ({ title, description, image }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative w-full h-[40vh] overflow-hidden cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center rounded-lg"
      />
      {isHover && (
        <div className="absolute transition duration-700 top-0 left-0 w-full h-full backdrop-blur-sm flex flex-col items-center justify-center text-white text-lg font-bold">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm font-semibold text-main w-[90%] mx-auto text-center">{description}</p>
        </div>
      )}
    </div>
  );
};
