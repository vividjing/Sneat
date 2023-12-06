import React, { useState } from "react";

export default function SelectFlexTime({ firstP, secondP }) {
  return (
    <div className="flex mt-6 gap-4">
      <div className="relative border-1 h-10 rounded-md border-gray-300 w-1/2">
        <select className="w-full h-full rounded-md pl-2 outline-0 bg-[#fafbfb]">
          <option value="GMT-10:00 Hawaii">GMT-10:00 Hawaii</option>
          <option value="GMT-06:00 Central America">
            GMT-06:00 Central America
          </option>
          <option value="GMT-05:00 Central America">
            GMT-05:00 Central America
          </option>
        </select>
        <p className="absolute rounded-sm -top-2 left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
          {firstP}
        </p>
      </div>
      <div className="relative border-1 h-10 rounded-md border-gray-300 w-1/2">
        <select className="w-full h-full rounded-md  pl-2 outline-0 bg-[#fafbfb]">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="Pound">Pound</option>
        </select>
        <p className="absolute -top-2 left-3 rounded-sm text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
          {secondP}
        </p>
      </div>
    </div>
  );
}
