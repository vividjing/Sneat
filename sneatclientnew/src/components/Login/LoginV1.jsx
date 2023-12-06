import React, { useState } from "react";
import boyLogIn from "../../Img/boyLogIn.png";
import LoginForm from "./LoginForm";

import "./LoginV1.css";

export default function LoginV1() {
  return (
    <div className="loginV1">
      <div className="leftPic">
        <img src={boyLogIn} alt="" />
      </div>
      <div className="rightForm">
        <LoginForm />
      </div>
    </div>
  );
}
