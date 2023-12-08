import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveMenu,
  setIsActive,
  setIsLogged,
  setToken,
  setUserName,
} from "../state";

export default function Sidebar() {
  const { activeMenu, currentColor, isActive, screenSize, bgColor } =
    useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };
  const { pathname } = useLocation();
  let b = pathname.lastIndexOf("/");
  const address = pathname.substring(b + 1, pathname.length);
  useEffect(() => {
    dispatch(setIsActive(address));
  }, [pathname]);

  const activeLink =
    "flex items-center gap-1 p-2  font-medium rounded-lg text-md";
  const activeLinkSecond =
    "flex items-center gap-1 p-2 font-medium rounded-lg text-md";
  const normalLink =
    "flex items-center gap-1 p-2 rounded-lg text-gray-400 dark:text-gray-200 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";
  return (
    <div className="ml-3 pr-3 min-h-screen overflow-auto">
      {activeMenu && (
        <>
          <div
            className="flex justify-between items-center"
            onClick={handleCloseSideBar}
          >
            <Link
              to="/dashboard/analytics"
              className="items-center flex gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware
                className="text-3xl"
                style={{ color: currentColor }}
              />
              <span className="text-[#4d5f71]">sneat</span>
            </Link>
            <button
              type="button"
              onClick={() => {
                dispatch(setActiveMenu(!activeMenu));
              }}
              className="text-xl rounded-full p-3 mt-4 block"
              style={{ color: currentColor }}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <NavLink
            to="/dashboard/analytics"
            className="mt-2 ml-3"
            onClick={handleCloseSideBar}
          >
            <div
              onClick={() => {
                dispatch(setIsActive("dashboard"));
              }}
              className={
                isActive === "dashboard" ||
                isActive === "analytics" ||
                isActive === "crm"
                  ? activeLink
                  : normalLink
              }
              style={{
                color:
                  isActive === "dashboard" ||
                  isActive === "analytics" ||
                  isActive === "crm"
                    ? currentColor
                    : "",
                backgroundColor:
                  isActive === "dashboard" ||
                  isActive === "analytics" ||
                  isActive === "crm"
                    ? bgColor
                    : "",
              }}
            >
              <AiOutlineHome className="text-xl mr-3" />
              <p>Dashboards</p>
            </div>
          </NavLink>
          <NavLink to="/dashboard/analytics" onClick={handleCloseSideBar}>
            <div
              onClick={() => {
                dispatch(setIsActive("analytics"));
              }}
              className={
                isActive === "analytics" ? activeLinkSecond : normalLink
              }
              style={{
                color: isActive === "analytics" ? currentColor : "",
              }}
            >
              <BsDot className="text-3xl" />
              <p>Analytics</p>
            </div>
          </NavLink>
          <NavLink to="/dashboard/crm" onClick={handleCloseSideBar}>
            <div
              onClick={() => {
                dispatch(setIsActive("crm"));
              }}
              className={isActive === "crm" ? activeLinkSecond : normalLink}
              style={{
                color: isActive === "crm" ? currentColor : "",
              }}
            >
              <BsDot className="text-3xl" />
              <p>CRM</p>
            </div>
          </NavLink>

          <NavLink to="/calendar" onClick={handleCloseSideBar}>
            <div
              onClick={() => {
                dispatch(setIsActive("calendar"));
              }}
              className={isActive === "calendar" ? activeLink : normalLink}
              style={{
                color: isActive === "calendar" ? currentColor : "",
                backgroundColor: isActive === "calendar" ? bgColor : "",
              }}
            >
              <BsCalendar2Week className="text-xl mr-3" />
              <p>Calendar</p>
            </div>
          </NavLink>
          <NavLink to="/accountsetting/account" onClick={handleCloseSideBar}>
            <div
              onClick={() => {
                dispatch(setIsActive("account"));
              }}
              className={
                isActive === "account" || isActive === "security"
                  ? activeLink
                  : normalLink
              }
              style={{
                color:
                  isActive === "account" || isActive === "security"
                    ? currentColor
                    : "",
                backgroundColor:
                  isActive === "account" || isActive === "security"
                    ? bgColor
                    : "",
              }}
            >
              <FiUsers className="text-xl mr-3" />
              <p>Account Setting</p>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={() => {
              dispatch(setIsLogged(false));
              dispatch(setToken(""));
              dispatch(setUserName(""));
              localStorage.removeItem("token");
              localStorage.removeItem("userName");
              localStorage.removeItem("email");
              localStorage.removeItem("address");
              localStorage.removeItem("state");
              localStorage.removeItem("zip");
              localStorage.removeItem("phone");
            }}
            className="fixed rounded-xl p-3 bottom-10"
            style={{ color: currentColor, backgroundColor: bgColor }}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
}
