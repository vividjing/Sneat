import React, { useState } from "react";

export default function FlexBetween({
  firstP,
  secondP,
  value1,
  value2,
  function1,
  function2,
}) {
  return (
    <div className="flex justify-between mt-6 gap-4">
      <div className="relative border-1 h-10 rounded-md border-gray-300 grow">
        <input
          onChange={function1}
          className="w-full h-full rounded-md  bg-[#fafbfb] pl-2 border-0 outline-0 "
          type="text"
          value={value1}
        />
        <p className="absolute -top-2 left-3 text-gray-500 rounded-sm bg-[#fafbfb] pl-2 pr-2 text-xs">
          {firstP}
        </p>
      </div>
      <div className="relative border-1 h-10  rounded-md border-gray-300 grow">
        <input
          value={value2}
          className="w-full h-full rounded-md pl-2 outline-0 bg-[#fafbfb]"
          type="text"
          onChange={function2}
        />
        <p className="absolute -top-2 left-3 text-gray-500 rounded-md bg-[#fafbfb] pl-2 pr-2 text-xs">
          {secondP}
        </p>
      </div>
    </div>
  );
}
