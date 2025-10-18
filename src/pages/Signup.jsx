import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex flex-col px-[18px]">
        <span className="w-[188px] h-[69px] mt-[40px] text-[28px] text-left leading-tight font-medium  ">
          Create your PopX account
        </span>

        <div className="text-left flex flex-col gap-[29px] mt-[31px]">
          <div className="flex flex-col relative">
            <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
              Full Name<span className="text-red-500 text-left">*</span>
            </label>
            <input placeholder="Full name" type="text" className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]" />
          </div>

          <div className="flex flex-col relative">
            <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
              Phone number<span className="text-red-500 text-left">*</span>
            </label>
            <input placeholder="Phone number" type="text"  className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]" />
          </div>

          <div className="flex flex-col relative">
            <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
              Email address<span className="text-red-500 text-left">*</span>
            </label>
            <input placeholder="Email address" type="email" className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]" />
          </div>

          <div className="flex flex-col relative">
            <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
              Password<span className="text-red-500 text-left">*</span>
            </label>
            <input placeholder="Password" type="password"  className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]" />
          </div>

          <div className="flex flex-col relative">
            <label className="absolute top-0 h-[21px] ml-[9px]   pl-[5px] text-[#6C25FF] text-[13px] bg-[#F7F8F9] w-auto -translate-y-1/2">
              Company name
            </label>
            <input placeholder="Company name" type="text" className="outline-1 rounded-md h-[40px] outline-[#CBCBCB] font-regular pl-[17px]" />
          </div>

          <div className="flex flex-col mt-[-9px]">
            <p className="text-[13px]">Are you an Agency?<span className="text-red-500 text-left">*</span></p>
            <div className="flex gap-[23px] mt-[10px]">
              <label className="flex text-[14px] item-center"> 
                <input type="radio" className="mr-[12px] w-[22px]" />
                Yes
              </label>
              <label className="flex text-[14px] item-center"> 
                <input type="radio" className="mr-[12px] w-[22px]" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>{navigate('/profile')}} className="bg-[#6C25FF] text-white rounded-md h-[46px] mb-[30px] mx-[20px]">
        Create Account
      </button>
    </div>
  );
};

export default Signup;
