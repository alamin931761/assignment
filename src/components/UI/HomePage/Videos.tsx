import assets from "@/assets";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

const Videos = () => {
  // Play button
  const playButton = (
    <div className="h-[15px] w-[25px] flex justify-center items-center bg-white-smoke/20 rounded-[4px] backdrop-blur-[0.5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-milk-white">
      <IoMdPlay className="text-milk-white ms-[2px] text-[8px]" />
    </div>
  );

  return (
    <div>
      {/* Section title */}
      <h2 className="text-2xl font-semibold text-baltic-sea mb-2">Videos</h2>

      {/* Responsive container for the main video */}
      <div className="h-[150px] w-[160px] sm:h-[240px] sm:w-[270px] md:h-[320px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
        <div className="relative">
          {/* Main video thumbnail */}
          <Image
            src={assets.images.rectangle5}
            width={400}
            height={200}
            alt="rectangle 5"
            className="rounded-[10px] h-[100px] sm:h-[165px] sm:w-full md:h-[235px] md:w-full lg:h-[300px] w-[160px] lg:w-full"
          />

          {/* Play button for the main video */}
          <div className="h-[50px] w-[70px] flex justify-center items-center bg-white-smoke/20 rounded-[4px] backdrop-blur-[0.5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-milk-white">
            <IoMdPlay className="text-milk-white ms-[2px] text-2xl" />
          </div>
        </div>

        {/* Grid of smaller video thumbnails */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="relative">
            <Image
              src={assets.images.rectangle6}
              width={200}
              height={100}
              alt="rectangle 6"
              className="rounded-[10px] h-[48px] w-[52px] sm:h-[65px] sm:w-full md:h-[70px] md:w-full lg:h-[90px] lg:w-full"
            />
            {playButton}
          </div>

          <div className="relative">
            <Image
              src={assets.images.rectangle7}
              width={200}
              height={100}
              alt="rectangle 7"
              className="rounded-[10px] h-[48px] w-[52px] sm:h-[65px] sm:w-full md:h-[70px] md:w-full lg:h-[90px] lg:w-full"
            />
            {playButton}
          </div>

          <div className="relative">
            <Image
              src={assets.images.rectangle8}
              width={200}
              height={100}
              alt="rectangle 8"
              className="rounded-[10px] h-[48px] w-[52px] sm:h-[65px] sm:w-full md:h-[70px] md:w-full  lg:h-[90px] lg:w-full"
            />
            {playButton}
          </div>
        </div>

        <p className="font-medium text-fun-blue mt-2 w-full text-end">More +</p>
      </div>
    </div>
  );
};

export default Videos;
