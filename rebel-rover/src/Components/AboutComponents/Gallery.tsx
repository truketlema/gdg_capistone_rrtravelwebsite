import bali from "../../assets/bali.png";
import dubai from "../../assets/dubai.png";
import paris from "../../assets/paris.png";
import italy from "../../assets/italy.png";

export const Gallery = () => {
  return (
    <div className=" w-full flex flex-col items-center mb-[170px]">
      <div>
        <p className=" text-center font-medium text-[36px] leading-[70px] text-faded-color text-base">Gallery</p>
        <p className=" text-center font-semibold text-6xl text-[#000000]">
          Unforgettable moment
        </p>
      </div>
      <div className="p-12 w-full  grid grid-cols-4 grid-rows-2 gap-4">
        <div className="relative col-span-2 row-span-2">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={bali}
            alt="Bali"
          />
          <p className="absolute bottom-4 left-4 text-white text-2xl font-bold px-3 py-1 rounded">
            Bali
          </p>
        </div>

        <div className="relative col-span-2 row-span-1">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={dubai}
            alt="Dubai"
          />
          <p className="absolute bottom-4 left-4 text-white text-2xl font-bold px-3 py-1 rounded">
            Dubai
          </p>
        </div>

        <div className="relative col-span-1 row-span-1">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={paris}
            alt="Paris"
          />
          <p className="absolute bottom-4 left-4 text-white text-2xl font-bold px-3 py-1 rounded">
            Paris
          </p>
        </div>

        <div className="relative col-span-1 row-span-1">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={italy}
            alt="Italy"
          />
          <p className="absolute bottom-4 left-4 text-white text-2xl font-bold px-3 py-1 rounded">
            Italy
          </p>
        </div>
      </div>
    </div>
  );
}
