import React from "react";
import profileimg from "../assets/profile.png";
import camera from "../assets/camera.svg";

const Profile = () => {
  return (
    <div className="h-screen flex flex-col justify-center text-[#1D2226] border-1 border-[#CBCBCB]">
      <div className="flex flex-col h-screen">
        <div className="h-[68px] flex px-[15px] pt-[27px] pb-[19px] bg-[#FFFFFF] shadow-[0_3px_6px_#00000007]">
          <span className="text-[18px] h-[22px]">Account Settings</span>
        </div>
        <div className="flex pl-[20px] pr-[16px] flex-col border-b-1 border-dashed border-[#CBCBCB] [border-bottom-style:dashed] [border-bottom-width:2px] [border-bottom-dasharray:4_4]">
          <div className="flex h-[136px] pt-[30px]">
            <img src={profileimg} className="h-[76px]" />
            <img
              src={camera}
              className="absolute ml-[59px] z-10 h-[23px] w-[21px] top-[147px]"
            />
            <div className=" px-[20px] flex flex-col">
              <span className="font-semibold text-[15px] flex">Marry Doe</span>
              <span className="text-[14px]">Marry@Gmail.com</span>
            </div>
          </div>

          <div className="flex h-[63px] mb-[20px] ">
            <span className="text-[14px] text-left">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </span>
          </div>
        </div>
      </div>
      <div className="h-[30px] bottom-0 border-t-1 border-dashed border-[#CBCBCB] [border-top-style:dashed] [border-top-width:2px] [border-top-dasharray:4_4]"></div>
    </div>
  );
};

export default Profile;
