import mountains from "../assets/mountains.png";
import Banner from "../Components/Banner";
import { AbtMessage } from "../Components/AboutComponents/AbtMessage";
// import AbtMessage from "./AbtMessage";
// import Statstics from "./Statstics";
// import Gallery from "./Gallery";
// import Mission from "./Mission";
import { MissionBox } from "../Components/AboutComponents/MissionBox";
import { HiUserGroup } from "react-icons/hi";
import { BiRocket } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { Statstics } from "../Components/AboutComponents/Statistics";
import { Gallery } from "../Components/AboutComponents/Gallery";
import Footer from "../Components/Footer";

export const AboutUs = () => {
  return (
    <div className=" flex flex-col items-center gap-12">
      <Banner page="About Us" breadcrumb="About Us" image={mountains} />
      <div className="  flex flex-col md:flex-row  justify-between gap-10 p-12">
        <MissionBox
          icon={<HiUserGroup className="w-[83px] h-[83px]" />}
          title={"Great team work"}
          detail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.  "
          }
        />
        <MissionBox
          icon={<BiRocket className="w-[83px] h-[83px]" />}
          title={"Our vision"}
          detail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. "
          }
        />
        <MissionBox
          icon={<GoGraph className="w-[83px] h-[83px]" />}
          title={"Our mision"}
          detail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..  "
          }
        />
      </div>
      <AbtMessage />
      <Statstics />
      <Gallery />
      <Footer />
    </div>
  );
}