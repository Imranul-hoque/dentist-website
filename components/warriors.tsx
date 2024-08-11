import { Profession, professions } from "@/constants";
import { ProfessionItem } from "./profession-item";

export const Warriors = () => {
  return (
    <div className="bg-[#F1F7FC] w-full h-auto py-10">
      <h2 className="text-main text-3xl md:texl-5xl font-bold text-center">
        What is Our Profession
      </h2>
      <div className="pt-5 max-w-5xl mx-auto px-10 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {professions.map((profession: Profession, index: number) => (
            <ProfessionItem
              key={index}
              title={profession.title}
              description={profession.description}
              image={profession.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
