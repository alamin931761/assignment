import assets from "@/assets";
import Image from "next/image";

const Photos = () => {
  return (
    <div>
      {/* Section title */}
      <h2 className="text-2xl font-semibold text-baltic-sea mb-2">Photos</h2>

      {/* Responsive container for images */}
      <div className="h-[160px] w-[160px] sm:h-[240px] sm:w-[240px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
        {/* Container for the images, arranged in a grid */}
        <div className="grid grid-cols-2">
          {/* Image 1 with responsive height, width, and rounded top-left corner */}
          <Image
            src={assets.images.rectangle1}
            width={200}
            height={200}
            alt="rectangle 1"
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-full md:h-[160px] md:w-full lg:h-[200px] lg:w-full rounded-tl-[10px]"
          />

          {/* Image 2 with responsive height, width, and rounded top-right corner */}
          <Image
            src={assets.images.rectangle2}
            width={200}
            height={200}
            alt="rectangle 2"
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-full md:h-[160px] md:w-full lg:h-[200px] lg:w-full rounded-tr-[10px]"
          />

          {/* Image 3 with responsive height, width, and rounded bottom-left corner */}
          <Image
            src={assets.images.rectangle3}
            width={200}
            height={200}
            alt="rectangle 3"
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-full md:h-[160px] md:w-full lg:h-[200px] lg:w-full rounded-bl-[10px]"
          />

          {/* Image 4 with responsive height, width, and rounded bottom-right corner */}
          <Image
            src={assets.images.rectangle4}
            width={200}
            height={200}
            alt="rectangle 4"
            className="h-[80px] w-[80px] sm:h-[120px] sm:w-full md:h-[160px] md:w-full lg:h-[200px] lg:w-full rounded-br-[10px]"
          />
        </div>

        <p className="font-medium text-fun-blue mt-2 text-end">More +</p>
      </div>
    </div>
  );
};

export default Photos;
