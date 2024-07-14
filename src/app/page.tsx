import Image from "next/image";
import Container from "@/components/Shared/Container";
import Photos from "@/components/UI/HomePage/Photos";
import Profile from "@/components/UI/HomePage/Profile";
import Videos from "@/components/UI/HomePage/Videos";
import assets from "@/assets";
import Blogs from "@/components/UI/HomePage/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

const HomePage = () => {
  return (
    <div className="h-full">
      {/* Profile background image */}
      <div>
        <Image
          src={assets.images.profileBackground}
          height={400}
          width={1920}
          alt="profile picture"
          className="h-[400px] w-full"
        />
      </div>

      {/* Main content container */}
      <Container>
        <div className="pb-10">
          <div className="w-[calc(100%-128px)] lg:w-[calc(100%-238px)] absolute top-0 left-0 grid grid-cols-1 lg:grid-cols-2">
            <Profile />
          </div>

          {/* Blogs, Photos, and Videos Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
            <div className="order-2 lg:order-1 mt-[26px] lg:mt-[164px]">
              <Blogs />
            </div>

            {/* Photos and Videos Component */}
            <div className="order-1 lg:order-2 mt-[125px] lg:mt-[26px] grid grid-cols-2 lg:grid-cols-1 gap-3">
              <Photos />
              <Videos />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
