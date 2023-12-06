import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

export default function Inputbox({ firstP, value, changeHandler }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex mt-6 gap-4 w-full">
      <div className="relative border-1 w-80 h-10 rounded-md border-gray-300">
        <input
          value={value}
          className="h-full w-full rounded-md pl-2 outline-0 bg-[#fafbfb]"
          type={isClicked ? "text" : "password"}
          onChange={changeHandler}
        />
        <p className="absolute -top-2 left-3 rounded-sm text-gray-500 bg-[#fafbfb] pl-2 pr-2 text-xs">
          {firstP}
        </p>
        <div className="absolute top-3 right-3" onClick={handleClick}>
          {isClicked ? <BsEye /> : <BsEyeSlash />}
        </div>
      </div>
    </div>
  );
}
