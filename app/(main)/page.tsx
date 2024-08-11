import { Benefits } from "@/components/benefits";
import { Booking } from "@/components/booking";
import { DentalTravel } from "@/components/dental-travel";
import { Excellence } from "@/components/excellence";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Warriors } from "@/components/warriors";
import React from "react";

const Page = () => {

  return (
    <div className="w-full h-full">
     <Hero />
      <DentalTravel />
      <Booking />
      <Benefits />
      <Warriors />
      <Excellence />
      <Footer />
    </div>
  )
}

export default Page;