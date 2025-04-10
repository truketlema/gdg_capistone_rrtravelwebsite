import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BiAward } from "react-icons/bi";
import { LuMountainSnow } from "react-icons/lu";
import bgImage from "../../assets/backpackers.png";

export const Statstics = () => {
  return (
    <div className="relative min-h-[549px] w-full flex items-center justify-center overflow-hidden mb-[170px]">
  <div 
    style={{ backgroundImage: `url(${bgImage})` }}
    className="absolute inset-0 bg-cover bg-center blur-sm"
  />
  
  <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:justify-between text-white">
    <div className="flex gap-4 justify-center items-center">
      <div>
        <FaUserGroup className="size-20" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-4xl">
          126 <sup>+</sup>
        </p>
        <p>Satisfied Client</p>
      </div>
   
        </div>
        <div className=" flex gap-4 justify-center items-center">
          <div>
            <FaUser className=" size-20" />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-bold text-4xl">
              230 <sup>+</sup>
            </p>

            <p>New Traveller</p>
          </div>
        </div>
        <div className=" flex gap-4 justify-center items-center">
          <div>
            <LuMountainSnow className=" size-20" />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-bold text-4xl">
              230 <sup>+</sup>
            </p>

            <p>Destination</p>
          </div>
        </div>
        <div className=" flex gap-4 justify-center items-center">
          <div>
            <BiAward className=" size-20" />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-bold text-4xl">
              230 <sup>+</sup>
            </p>

            <p>Award </p>
          </div>
        </div>
      </div>
    </div>
  );
}
