import React, { useState, useRef, useEffect } from "react";
import logo from "../../Img/logo.svg";
import clap from "../../Img/clap.svg";
import facebook from "../../Img/facebook.svg";
import g from "../../Img/g.svg";
import github from "../../Img/github.svg";
import twitter from "../../Img/twitter.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useLogInMutation } from "../../state/authApi";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLogged,
  setToken,
  setUserName,
  setUserEmail,
  setAddress,
  setPhoneNumber,
  setZipCode,
  setState,
} from "../../state";

import "./loginForm.css";

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginFn, { error }] = useLogInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = location.state?.prelocation?.pathname || "/";

  const showPsHandler = () => {
    setVisible(!visible);
  };
  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    LoginFn({ email, password }).then((res) => {
      if (!res.error) {
        console.log(res.data);
        dispatch(setIsLogged(true));
        dispatch(setToken(res.data.token));
        dispatch(setUserName(res.data.userName));
        dispatch(setUserEmail(res.data.email));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.userName);
        localStorage.setItem("email", res.data.email);
        res.data.phoneNumber &&
          localStorage.setItem("phone", res.data.phoneNumber);
        res.data.state && localStorage.setItem("state", res.data.state);
        res.data.address && localStorage.setItem("address", res.data.address);
        res.data.zipCode && localStorage.setItem("zip", res.data.zipCode);
        navigate(prevLocation, { replace: true });
      }
    });
  };

  return (
    <div className="rightContainer">
      <div className="rightLogo flex">
        <img src={logo} alt="" />
        <span className="title">sneat</span>
      </div>
      <div className="welcome flex">
        <span>Welcome to Sneat!</span>
        <img src={clap} alt="" />
      </div>
      <div className="signinReminder">
        Please sign-in to your account and start the adventure
      </div>
      <p className="text-red-600">{error && "Login failed, please retry."}</p>
      <p className="text-red-600 text-sm">Email: sneatadmin@gmail.com</p>
      <p className="text-red-600 text-sm">Pwd: 1234!ABcd</p>
      <form onSubmit={submitHandler}>
        <div className="email">
          <input
            className="inputFormat border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
            type="text"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="content1 ">Email</div>
        </div>
        <div className="ps relative w-full">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={visible ? "text" : "password"}
            className="inputFormat relative border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
          />
          <div className="absolute top-6 right-3" onClick={showPsHandler}>
            {visible ? <BsEye /> : <BsEyeSlash />}
          </div>
          <div className="content1">Password</div>
        </div>

        <div>
          <span className="checkbox">
            <input id="checkboxInput" type="checkbox" defaultChecked />
            <label htmlFor="checkboxInput"></label>
          </span>
          <span className="remember"> Remember Me</span>
          <span className="forget">
            <Link to="/forgotpassword">Forgot Password ?</Link>
          </span>
        </div>
        <button className="signinButton w-full"> SIGN IN</button>
      </form>
      <div className="create">
        <span>New on our platform?</span>
        <Link to="/register">
          <span className="accountCreate"> Create an account</span>
        </Link>
      </div>
      <div>
        <div className="socialMedia">
          <div className="line"></div>or <div className="line"></div>
        </div>
        <ul>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={github} alt="" />
          </li>
          <li>
            <img src={g} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
