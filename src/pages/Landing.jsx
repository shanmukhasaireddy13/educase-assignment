import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-[20px] justify-end h-screen    ">
      <div className="flex flex-col ">
        <span className="text-[26.5px] h-[33px] font-bold text-left">
          Welcome to PopX
        </span>
        <span className="mr-[110px] text-left mt-[10px] text-[18px] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </span>
        <button
          className="h-[46px] mt-[29px] bg-[#6C25FF] text-[#FFFFFF] font-semibold rounded-lg"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create Account
        </button>
        <button
          className="h-[46px] mt-[10px] mb-[41px] bg-[#6C25FF4B] font-semibold rounded-lg"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
