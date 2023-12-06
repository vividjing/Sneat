import React, { useEffect, useState } from "react";
import Inputbox from "./InputBox";
import FlexBetween from "./FlexBetween";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useUpdatePwdMutation, useUpdateUserMutation } from "../state/api";
import { MdOutlineCancel } from "react-icons/md";

export default function PasswordChange() {
  const { currentColor, userEmail } = useSelector((state) => state.global);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRe, setNewPasswordRe] = useState("");
  const [validPwd, setValidPwd] = useState(true);
  const [matchPwd, setMatchPwd] = useState(true);
  const [updatePwDFn, { isSuccess }] = useUpdatePwdMutation();

  const userInfo = {
    userEmail,
    newPassword,
    password,
  };

  const pwdHandler = (e) => {
    setPassword(e.target.value);
  };
  const newpwdHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const newpwdReHandler = (e) => {
    setNewPasswordRe(e.target.value);
  };

  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(newPassword));
  }, [newPassword]);
  useEffect(() => {
    if (newPassword !== newPasswordRe) {
      setMatchPwd(false);
    } else {
      setMatchPwd(true);
    }
  }, [newPasswordRe]);
  const [update, setUpdate] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    updatePwDFn(userInfo).then((res) => {
      if (!res.error) {
        setUpdate(true);
      } else {
        console.log(res.error);
      }
    });
  };
  const clickHandler = () => {
    setPassword("");
    setNewPassword("");
    setNewPasswordRe("");
  };

  return (
    <div className="mt-6 p-6 w-full border-1 border-gray-300 rounded-md text-gray-400 ">
      {update && (
        <div className="bg-half-transparent fixed top-0 right-0 z-10">
          <div className="flex justify-center px-5 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center  h-10 gap-4 bg-white">
            <p className="text-red-600">Password updated successfully</p>
            <MdOutlineCancel
              className="text-red-600 text-xl"
              onClick={() => setUpdate(false)}
            />
          </div>
        </div>
      )}
      <p className="font-semibold text-lg mb-6">Change Password</p>
      <form className="w-full" onSubmit={submitHandler}>
        <div>
          <Inputbox
            firstP="Current Password"
            value={password}
            changeHandler={pwdHandler}
          />
        </div>

        <div className="flex gap-2 ">
          <Inputbox
            firstP="New Password"
            value={newPassword}
            changeHandler={newpwdHandler}
          />
          <Inputbox
            firstP="Confirm New Password"
            value={newPasswordRe}
            changeHandler={newpwdReHandler}
          />
        </div>
        {!validPwd && newPassword && (
          <p className="text-red-600">invalid password</p>
        )}
        {!matchPwd && newPasswordRe && (
          <p className="text-red-600">Passwords don't match</p>
        )}
        <p className="mt-6 font-medium"> Password Requirements:</p>
        <div className="flex mt-3">
          <BsDot /> <p>Minimum 8 characters long - the more, the better</p>
        </div>
        <div className="flex">
          <BsDot /> <p>At least one lowercase & one uppercase character</p>
        </div>
        <div className="flex">
          <BsDot /> <p>At least one number, symbol & one special character</p>
        </div>
        <div className="flex gap-2  mt-6">
          <button
            type="submit"
            className="rounded-md text-white px-4 py-1"
            style={{ backgroundColor: currentColor }}
          >
            SAVE CHANGES
          </button>
          <button
            type="button"
            title="reset"
            onClick={clickHandler}
            className="border-1 rounded-md px-4 py-1"
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}
