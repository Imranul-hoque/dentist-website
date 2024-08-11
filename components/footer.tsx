import { Logo } from "./logo";
import { Navbar } from "./navbar";

export const Footer = () => {
  return (
    <div className="w-full h-auto px-10 py-6 bg-main text-white">
      <div className="w-full h-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-3 w-full h-full">
          <Logo />
          <div className="ml-auto">
            <Navbar />
          </div>
        </div>
        <p className="text-sm text-white font-semibold text-center">
          all right reserved by &copy; Imran&apos;s FusionLab
        </p>
      </div>
    </div>
  );
};
