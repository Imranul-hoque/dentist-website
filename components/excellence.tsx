import Image from "next/image"

export const Excellence = () => {
    return (
      <div className="w-full h-full lg:h-[50vh] py-6 bg-white">
        <div className="max-w-5xl h-full mx-auto px-10 sm:px-8 md:px-4 lg:px-0">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="py-5 md:py-2 w-full h-full flex flex-col items-center justify-center space-y-2 border rounded-lg shadow-lg scale-100 hover:scale-105 transition duration-300 cursor-pointer hover:animate-bounce z-10">
              <Image
                src={"/svg/dentist-consultant.svg"}
                alt="Dentist Consultant"
                width={40}
                height={40}
              />
              <h2 className="text-lg font-bold text-main">
                Online Consultation
              </h2>
              <p className="text-sm font-semibold text-main text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                tempora.
              </p>
            </div>
            <div className="py-5 md:py-2 w-full h-full flex flex-col items-center justify-center space-y-2 border rounded-lg shadow-lg scale-100 hover:scale-105 transition duration-300 cursor-pointer z-10 hover:animate-bounce">
              <Image
                src={"/svg/general-dentist.svg"}
                alt="Dentist Consultant"
                width={40}
                height={40}
                className="text-green-500"
              />
              <h2 className="text-lg font-bold text-main">General Dentist</h2>
              <p className="text-sm font-semibold text-main text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                tempora.
              </p>
            </div>
            <div className="py-5 md:py-2 w-full h-full flex flex-col items-center justify-center space-y-2 border rounded-lg shadow-lg scale-100 hover:scale-105 transition duration-300 cursor-pointer hover:animate-bounce z-10">
              <Image
                src={"/svg/paste.svg"}
                alt="Dentist Consultant"
                width={40}
                height={40}
              />
              <h2 className="text-lg font-bold text-main">Great Results</h2>
              <p className="text-sm font-semibold text-main text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}