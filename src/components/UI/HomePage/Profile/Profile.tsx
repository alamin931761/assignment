import Image from "next/image";
import assets from "@/assets";
import Container from "@/components/Shared/Container";
import { GoDotFill } from "react-icons/go";
import { Button } from "@/components/UI/button";

const Profile = () => {
  return (
    <div>
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

      <Container>
        <div className="relative">
          {/* Profile picture */}
          <Image
            src={assets.images.profilePic}
            height={200}
            width={200}
            alt="profile picture"
            className="absolute -top-[100px]"
          />

          {/* User information and follow button */}
          <div className="flex justify-between">
            <div className="relative left-[226px]">
              {/* User description */}
              <h2 className="text-2xl font-semibold text-baltic-sea mb-2 flex items-center">
                John Doe <GoDotFill className="inline mx-2" />
                <span className="text-dark-pastel-blue font-light text-xs">
                  @johndoe
                </span>
              </h2>

              <div className="text-sm text-dark-jungle-green">
                <p>Astrophotographer 🌌</p>
                <p>Gamer 👾</p>
              </div>
            </div>

            {/* Follow button */}
            <Button className="uppercase text-sm rounded-[100px]">
              follow
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
