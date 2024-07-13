import assets from "@/assets";
import { Button } from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

// Metadata for the Not Found page
export const metadata = {
  title: "Page Not Found",
  description: "Oops! The page you are looking for does not exist.",
};

const notFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center -z-10">
      {/* Display the 404 image */}
      <Image src={assets.images.notFound} height={840} width={1300} alt="404" />

      {/* back to home */}
      <div className="h-full py-10">
        <Button>
          <Link href="/" className="capitalize">
            <FaArrowLeft className="inline me-1" />
            back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default notFoundPage;
