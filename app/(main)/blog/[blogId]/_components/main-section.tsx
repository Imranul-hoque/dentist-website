import Image from "next/image";

export const MainSection = () => {
    return (
      <div className="w-full py-10 h-full max-w-4xl mx-auto px-10 lg:px-2">
        <div className="w-full h-full flex flex-col space-y-5">
          <div className="relative w-full h-[60vh] lg:h-[90vh]">
            <Image
              className="rounded-xl shadow-md"
              src={"/blog/image_01.jpg"}
              alt="Single Page"
              fill
            />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-main">
            Electric Toothbrush for the Best Long Term Effects
          </h2>
          <p className="pt-4 text-justify text-lg font-semibold text-main">
            {`
            Regular dental checkups are more than just routine cleanings; they
            are essential for maintaining overall oral health and preventing
            serious dental issues down the line. In this blog post, we&apos;ll
            explore the critical role that bi-annual visits to the dentist play
            in preventing cavities, gum disease, and even detecting early signs
            of oral cancer. Discover why these appointments are a key part of
            your healthcare routine and how they contribute to a bright, healthy
            smile.Regular dental checkups are more than just routine cleanings; they
            are essential for maintaining overall oral health and preventing
            serious dental issues down the line. In this blog post, we&apos;ll
            explore the critical role that bi-annual visits to the dentist play
            in preventing cavities, gum disease, and even detecting early signs
            of oral cancer. Discover why these appointments are a key part of
            your healthcare routine and how they contribute to a bright, healthy
            smile.
            `}
          </p>
        </div>
      </div>
    );
}