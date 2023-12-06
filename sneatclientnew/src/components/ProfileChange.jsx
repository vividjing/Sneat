import React, { useState } from "react";
import FlexBetween from "./FlexBetween";
import SelectFlex from "./SelectFlex";
import SelectFlexTime from "./SelectFlexTime";
import avatar from "../data/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "../state/api";
import { MdOutlineCancel } from "react-icons/md";
import {
  setAddress,
  setPhoneNumber,
  setState,
  setUserEmail,
  setUserName,
  setZipCode,
  setIsLogged,
  setToken,
} from "../state";

export default function ProfileChange() {
  const {
    currentColor,
    userName,
    userEmail,
    phoneNumber,
    address,
    state,
    zipCode,
  } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const userInfo = {
    userName,
    userEmail,
    phoneNumber,
    address,
    state,
    zipCode,
  };

  const [updateUserFn, { isSuccess }] = useUpdateUserMutation();
  const [deleteUserFn, { isSuccess: deleteSuccess }] = useDeleteUserMutation();
  console.log(userEmail);
  const userNameHander = (e) => {
    dispatchEvent(setUserName(e.target.value));
  };
  const userEmailHander = (e) => {
    dispatch(setUserEmail(e.target.value));
  };
  const phoneNumberHandler = (e) => {
    dispatch(setPhoneNumber(e.target.value));
    localStorage.setItem("phone", e.target.value);
  };
  const addressHandler = (e) => {
    dispatch(setAddress(e.target.value));
    localStorage.setItem("address", e.target.value);
  };
  const stateHandler = (e) => {
    dispatch(setState(e.target.value));
    localStorage.setItem("state", e.target.value);
  };
  const zipCodeHandler = (e) => {
    dispatch(setZipCode(e.target.value));
    localStorage.setItem("zip", e.target.value);
  };
  const [update, setUpdate] = useState();
  const [deleteDone, setDeleteDone] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    updateUserFn(userInfo).then((res) => {
      if (!res.error) {
        setUpdate(true);
      }
    });
  };

  const resetClickHandler = () => {
    dispatch(setPhoneNumber(""));
    dispatch(setState(""));
    dispatch(setAddress(""));
    dispatch(setZipCode(""));
  };
  const [deleteButton, setDeleteButton] = useState(true);
  const deleteButtonHandler = () => {
    setDeleteButton(!deleteButton);
  };
  const deletedclickHandler = () => {
    deleteUserFn(userInfo).then((res) => {
      if (!res.error) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("address");
        localStorage.removeItem("state");
        localStorage.removeItem("zip");
        localStorage.removeItem("phone");
        dispatch(setIsLogged(false));
        dispatch(setToken(""));
        dispatch(setUserName(""));
        dispatch(setUserEmail(""));
        dispatch(setPhoneNumber(""));
        dispatch(setState(""));
        dispatch(setAddress(""));
        dispatch(setZipCode(""));

        setDeleteDone(true);
      }
    });
  };

  return (
    <div className="text-gray-500 mt-6 ">
      {update && (
        <div className="bg-half-transparent w-screen h-screen fixed top-0 right-0 z-10">
          <div className="flex justify-center px-5 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center  h-10 gap-4 bg-white">
            <p className="text-red-600">Information updated successfully</p>
            <MdOutlineCancel
              className="text-red-600 text-xl"
              onClick={() => setUpdate(false)}
            />
          </div>
        </div>
      )}
      {deleteDone && (
        <div className="bg-half-transparent w-screen h-screen fixed top-0 right-0 z-10">
          <div className="flex justify-center px-5 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center  h-10 gap-4 bg-white">
            <p className="text-red-600">{`${userName} was deleted`}</p>
            <MdOutlineCancel
              className="text-red-600 text-xl"
              onClick={() => setDeleteDone(false)}
            />
          </div>
        </div>
      )}

      <div className="border-1 rounded-md pb-6 ">
        <div className="border-b-1 p-6 mt-6">
          <p className="font-semibold text-lg mb-6">Account Details</p>
          <div className="flex">
            <img className="w-20 rounded-md mr-5" src={avatar} alt="" />
            <div>
              <div className="flex gap-2">
                <button
                  className="rounded-md text-white px-4 py-1"
                  style={{ backgroundColor: currentColor }}
                >
                  Upload New Photo
                </button>
                <button className="border-1 rounded-md px-4 py-1">Reset</button>
              </div>
              <div className="text-gray-400 mt-7">
                Allowed PNG or JPEG. Max size of 800K.
              </div>
            </div>
          </div>
        </div>
        <form className="w-full" onSubmit={submitHandler}>
          <div className="px-6 ">
            <FlexBetween
              firstP="User Name"
              secondP="Email"
              value1={userName}
              value2={userEmail}
              function1={userNameHander}
              function2={userEmailHander}
            />
            <FlexBetween
              firstP="Phone Number"
              secondP="Address"
              value1={phoneNumber}
              value2={address}
              function1={phoneNumberHandler}
              function2={addressHandler}
            />
            <FlexBetween
              firstP="State"
              secondP="Zip Code"
              value1={state}
              value2={zipCode}
              function1={stateHandler}
              function2={zipCodeHandler}
            />
            <SelectFlex firstP="Country" secondP="Language" />
            <SelectFlexTime firstP="Timezone" secondP="Currency" />
          </div>
          <div className="flex gap-2 px-6 mt-6">
            <button
              type="submit"
              className="rounded-md text-white px-4 py-1"
              style={{ backgroundColor: currentColor }}
            >
              SAVE CHANGES
            </button>
            <button
              type="button"
              onClick={resetClickHandler}
              className="border-1 rounded-md px-4 py-1"
            >
              RESET
            </button>
          </div>
        </form>
      </div>

      <div className="border-1 rounded-md p-6 mt-6 ">
        <p className="font-semibold text-lg mb-6">Account Details</p>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={deleteButtonHandler}
            className="border-1 border-gray-300"
          />
          <div className="ml-3 text-gray-400 font-medium ">
            I confirm my account deactivation
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            disabled={deleteButton}
            onClick={deletedclickHandler}
            style={{ backgroundColor: deleteButton ? "gray" : "#ff3e1d" }}
            className="rounded-md text-white px-6 py-2"
          >
            DEACTIVATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}
