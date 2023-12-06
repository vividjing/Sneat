import React, { useState } from "react";

export default function SelectFlex({ firstP, secondP }) {
  return (
    <div className="flex mt-6 gap-4">
      <div className="relative border-1 h-10 rounded-md border-gray-300 w-1/2">
        <select className="w-full h-full rounded-md outline-0 pl-2 bg-[#fafbfb]">
          <option value="Australia">Australia</option>
          <option value="China">China</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
        </select>
        <p className="absolute -top-2 rounded-sm left-3 text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
          {firstP}
        </p>
      </div>
      <div className="relative border-1 h-10 rounded-md border-gray-300 w-1/2">
        <select className="w-full h-full rounded-md outline-0 pl-2 bg-[#fafbfb]">
          <option value="Arabic">Arabic</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="Portuguese">Portuguese</option>
        </select>
        <p className="absolute -top-2 left-3 rounded-sm text-gray-400 bg-[#fafbfb] pl-2 pr-2 text-xs">
          {secondP}
        </p>
      </div>
    </div>
  );
}
