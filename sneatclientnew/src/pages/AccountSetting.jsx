import React, { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";


export default function AccountSetting() {
  const { currentColor, isActive } = useSelector((state) => state.global);
  const [isButtonActive, setIsButtonActive] = useState("account");
  const dispatch = useDispatch();
  const handleClick = (name) => {
    setIsButtonActive(name);

  };

  return (
    <div className=" ml-4 mr-6 mt-5 text-sm">
      <div className="flex text-gray-500 gap-4 ">
        <Link to="/accountsetting/account">
          <button
            onClick={() => handleClick("account")}
            className="flex items-center gap-1 rounded-md h-8 pl-2 pr-2"
            style={{
              backgroundColor: isButtonActive === "account" ? currentColor : "",
              color: isButtonActive === "account" ? "white" : "",
            }}
          >
            <AiOutlineUser />
            <p>ACCOUNT</p>
          </button>
        </Link>

        <Link to="/accountsetting/security">
          <button
            onClick={() => handleClick("security")}
            className="flex items-center gap-1 rounded-md h-8 pl-2 pr-2"
            style={{
              backgroundColor:
                isButtonActive === "security" ? currentColor : "",
              color: isButtonActive === "security" ? "white" : "",
            }}
          >
            <AiOutlineSecurityScan />
            <p>SECURITY</p>
          </button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
