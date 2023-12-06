import React from "react";
import girlpassword from "../../Img/girlpassword.png";
import logo from "../../Img/logo.svg";
import suo from "../../Img/suo.svg";
import "../Login/LoginV1.css";
import "./forgetV1.css";
import { useNavigate } from "react-router-dom";

export default function ForgetV1() {
  const navigate = useNavigate();
  const backtoLoginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="loginV1">
      <div className="leftPic">
        <img src={girlpassword} alt="" />
      </div>
      <div className="rightForm">
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
              {"<"} Back to login
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
