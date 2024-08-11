"use client";

import { HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center ">
      <HeartPulse className="w-8 h-8 -rotate-45 text-blue-500" />
      <div className="flex flex-col -space-y-2 text-blue-500">
        <span className="text-sm font-semibold">Dental</span>
        <span className="text-sm font-semibold">Healthcare</span>
      </div>
    </Link>
  );
};
