import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col px-[20px] pt-[40px]">
        <p className="text-[28px] font-medium text-left w-[189px] leading-tight">
          Signin to your PopX account
        </p>
        <p className="opacity-60 text-[18px] text-left mt-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="flex flex-col relative mt-[33px]">
          <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
            Email address<span className="text-red-500 text-left">*</span>
          </label>
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]"
          />
        </div>

        <div className="flex flex-col relative mt-[23px]">
          <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
            Password<span className="text-red-500 text-left">*</span>
          </label>
          <input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]"
          />
        </div>

        <button
          disabled={isDisabled}
          className={`h-[46px] mt-[14px] text-white rounded-md text-[16px] font-medium ${
            isDisabled
              ? "bg-[#CBCBCB] cursor-not-allowed"
              : "bg-[#6C25FF] cursor-pointer"
          }`}
          onClick={() => {
            navigate("/profile");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
