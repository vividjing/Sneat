import React, { useState } from "react";
import girlpassword from "../../Img/girlpassword.png";
import RegisterForm from "./RegisterForm";

import "./registerV1.css";

export default function RegisterV1() {
  return (
    <div className="loginV1">
      <div className="leftPic">
        <img src={girlpassword} alt="" />
      </div>
      <div className="rightForm">
        <RegisterForm />
      </div>
    </div>
  );
}
