import Image from "next/image"
import { Button } from "./ui/button";

export const Hero = () => {
    return (
      <div className="bg-[url('/banner-image.png')] bg-cover bg-center w-full h-[80vh]">
        <div className="w-full md:max-w-5xl mx-auto px-10 md:px-0 flex flex-col justify-center items-start h-full">
          <h1 className="text-5xl w-full md:w-[40%] text-center font-bold text-white">Dentist Tourism</h1>
          <p className="md:w-[40%] w-full text-center leading-5 pt-4 text-sm font-semibold text-muted-foreground">
            Providing exceptional dental care to help you achieve and maintain a
            healthy, beautiful smile for life
          </p>
          <div className="pt-4 w-full md:w-[40%] text-center">
            <Button className="bg-[#013A65] px-8 py-6 text-white rounded-tl-2xl rounded-br-2xl hover:rounded-br-none hover:rounded-tl-none transition-all duration-500">Book Now</Button>
          </div>
        </div>
      </div>
    );
}