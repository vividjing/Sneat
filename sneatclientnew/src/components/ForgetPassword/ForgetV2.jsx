import React from "react";
import logo from "../../Img/logo.svg";
import suo from "../../Img/suo.svg";
import "../Login/LoginV2.css";

import { useNavigate } from "react-router-dom";

export default function ForgetV2() {
  const navigate = useNavigate();
  const backtoLoginHandler = () => {
    navigate("/");
  };
  return (
    <div className="LoginV2">
      <div className="rightContainer">
        <div className="rightLogo flex">
          <img src={logo} alt="" />
          <span className="title">sneat</span>
        </div>
        <div className="welcome flex">
          <span>Forgot Password ?</span>
          <img src={suo} alt="" />
        </div>
        <div className="signinReminder">
          Enter your email and we'll send you instructions to reset your
          password
        </div>
        <form action="#">
          <div className="email">
            <input
              className="border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
              type="text"
              placeholder="Email"
            />
          </div>
        </form>
        <div className="signinButton"> SEND RESET LINK</div>
        <div className="create">
          <span onClick={backtoLoginHandler} className="accountCreate">
            {" "}
            {"<"} Back to login{" "}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
