import React from "react";

interface MissionBoxProps {
    icon: React.ReactNode;
    title: string;
    detail: string;
}

export const MissionBox: React.FC<MissionBoxProps> = ({ icon, title, detail }) => {
  return (
    <div className=" flex flex-col items-center">
      <div>{icon}</div>
      <div>
        <h2 className=" text-center text-4xl font-semibold lg:text-5xl my-4">
          {title}
        </h2>
        <p className="text-center font-medium text-[18px] text-faded-color text-base sm:text-lg">{detail}</p>
      </div>
    </div>
  );
}