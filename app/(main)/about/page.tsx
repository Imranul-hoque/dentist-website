import { Excellence } from "@/components/excellence";
import { Footer } from "@/components/footer";
import { Banner } from "./components/banner";
import { Mission } from "./components/mission";
import { Video } from "./components/video";
import { Service } from "./components/service";

const About = () => {
  return (
    <div className="w-full h-full">
      <Banner />
      <Video />
      <Excellence />
      <Mission />
      <Service />
      <Footer />
    </div>
  );
};

export default About;
