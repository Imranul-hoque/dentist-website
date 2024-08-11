"use client";

import { Button } from "@/components/ui/button";
import { truncateParagraph } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BlogItemProps = {
  title: string;
  description: string;
  image: string;
};

export const BlogItem = ({ title, description, image }: BlogItemProps) => {
  
  const router = useRouter();
  
  return (
    <div className="w-full h-full flex flex-col space-y-5">
      <div className="relative w-full h-[60vh] lg:h-[100vh]">
        <Image src={image} alt={title} fill className="bg-center bg-cover rounded-xl shadow-md" />
      </div>
      <h2 className="text-3xl lg:text-5xl text-main font-semibold">{title}</h2>
      <p className={"text-lg pt-4 mb-3 text-main font-semibold leading-5"}>
        {truncateParagraph(description, 50)}
      </p>
      <Button onClick={() => router.push("/blog/blogId") } className="bg-[#013A65] w-[20%] my-3 px-8 py-6 text-white rounded-tl-2xl rounded-br-2xl hover:rounded-br-none hover:rounded-tl-none transition-all duration-500">
        Read More
      </Button>
    </div>
  );
};
