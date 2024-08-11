"use client"

export const Video = () => {
    return (
      <div className="max-w-2xl md:max-w-4xl h-[70vh] mx-auto -mt-[28vh] px-10 md:px-4">
        <div className="relative h-full w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/tFamW1_CJqM?si=OYPeakyYqTVie3u4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
}