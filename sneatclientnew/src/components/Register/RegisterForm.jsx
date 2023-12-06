import React, { useRef, useState, useEffect } from "react";
import logo from "../../Img/logo.svg";
import rocket from "../../Img/rocket.svg";
import facebook from "../../Img/facebook.svg";
import g from "../../Img/g.svg";
import github from "../../Img/github.svg";
import twitter from "../../Img/twitter.svg";
import { Link, useNavigate } from "react-router-dom";
import "./registerForm.css";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { useRegisterMutation } from "../../state/authApi";

export default function RegisterForm() {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(true);
  const [registerFn, { error }] = useRegisterMutation();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    registerFn({ userName, email, password }).then((res) => {
      if (!res.error) {
        navigate("/login", { replace: true });
      }
    });
  };
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  const userRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);
  const showPsHandler = () => {
    setVisible(!visible);
  };

  const [registerButton, setRegisterButton] = useState(true);
  const registerButtonHandler = () => {
    setRegisterButton(!registerButton);
  };

  return (
    <div className="rightContainer">
      <div className="rightLogo flex">
        <img src={logo} alt="" />
        <span className="title">sneat</span>
      </div>
      <div className="welcome flex">
        <span>Adventure starts here</span>
        <img src={rocket} alt="" />
      </div>
      <div className="signinReminder">
        Make your app management easy and fun!
      </div>
      <p className="text-red-600">
        {error && "Registration failed, please retry."}
      </p>
      <form onSubmit={submitHandler}>
        <div className="email">
          <input
            className="inputFormat border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
            type="text"
            autoComplete="off"
            ref={userRef}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <div className="content1">Username</div>
        </div>
        <div className="email">
          <input
            className=" inputFormat border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
            type="text"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="content1">Email</div>
        </div>

        <div className="relative w-full">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="off"
            type={visible ? "text" : "password"}
            className="inputFormat relative border-1 outline-none mt-3 rounded-md border-[#d2d7db] px-3 w-full h-11 focus:border-sky-500"
          />
          <div className="absolute top-6 right-3" onClick={showPsHandler}>
            {visible ? <BsEye /> : <BsEyeSlash />}
          </div>

          <div className="content1">Password</div>
        </div>
        {!validPwd && password && (
          <div>
            <div className="flex items-center text-xs text-red-600">
              <BsDot /> Minimum 8 characters long
            </div>
            <div className="flex items-center text-xs text-red-600">
              <BsDot /> At least one lowercase & one uppercase
            </div>
            <div className="flex items-center text-xs text-red-600">
              <BsDot /> character At least one number, symbol & one special
              character
            </div>
          </div>
        )}

        <div>
          <span className="checkbox">
            <input
              id="checkboxInput"
              type="checkbox"
              onChange={registerButtonHandler}
            />
            <label htmlFor="checkboxInput"></label>
          </span>
          <span className="remember">
            I agree to <span className="privacy">privacy policy & terms</span>
          </span>
        </div>
        <button
          disabled={registerButton}
          style={{ backgroundColor: registerButton ? "gray" : "#03c3ec" }}
          className="signinButton ml-3"
        >
          SIGN UP
        </button>
      </form>
      <div className="create">
        <span>Already have an account?</span>
        <Link to="/login">
          <span className="accountCreate"> Sign in instead</span>
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
