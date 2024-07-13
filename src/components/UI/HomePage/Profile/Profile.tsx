import Image from "next/image";
import assets from "@/assets";
import { GoDotFill } from "react-icons/go";
import { Button } from "@/components/UI/button";

const Profile = () => {
  return (
    <div className="relative lg:mx-6">
      {/* Profile picture */}
      <Image
        src={assets.images.profilePic}
        height={200}
        width={200}
        alt="profile picture"
        className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] absolute -top-[50px] lg:-top-[100px] left-3"
      />

      {/* Profile details container */}
      <div className="relative left-[128px] lg:left-[238px] top-2 lg:top-[26px] mx-3">
        <div className="w-full flex justify-between flex-wrap">
          <div>
            {/* User's name and username */}
            <h2 className="text-sm lg:text-2xl font-semibold text-baltic-sea mb-2 flex items-center text-nowrap">
              John Doe <GoDotFill className="inline mx-2" />
              <span className="text-dark-pastel-blue font-light text-xs">
                @johndoe
              </span>
            </h2>

            {/* User's bio */}
            <div className="lg:text-sm text-xs text-dark-jungle-green mb-2">
              <p>Astrophotographer 🌌</p>
              <p>Gamer 👾</p>
            </div>
          </div>

          {/* Follow button */}
          <Button className="uppercase text-xs lg:text-sm rounded-[100px]">
            follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
