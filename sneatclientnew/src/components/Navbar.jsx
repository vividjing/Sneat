import React, { useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiSun } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { RiNotification3Line } from "react-icons/ri";
import { setActiveMenu, setMode, setScreenSize } from "../state";
import avatar from "../data/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const { activeMenu, currentColor, mode, screenSize } = useSelector(
    (state) => state.global
  );

  const NavButton = ({ id, customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      id={id}
      onClick={() => {
        dispatch(customFunc);
      }}
      style={{ color: currentColor }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  );

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setActiveMenu(false));
    } else {
      dispatch(setActiveMenu(true));
    }
  }, [screenSize]);

  return (
    <>
      <div
        className="flex justify-between items-center mt-3 md:ml-3 md:mr-6 relative rounded-xl border-1 cursor-pointer"
        style={{ background: "white" }}
      >
        <div className="flex items-center">
          {screenSize <= 900 || activeMenu === false ? (
            <NavButton
              id="Menu"
              customFunc={setActiveMenu(!activeMenu)}
              color={currentColor}
              icon={<AiOutlineMenu />}
            />
          ) : (
            ""
          )}

          <NavButton
            id="Menu"
            color={currentColor}
            icon={<AiOutlineSearch />}
          />
          <input
            className="outline-none border-0"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex">
          <NavButton
            title="Notification"
            color={currentColor}
            icon={<HiLanguage />}
          />

          <NavButton
            title="mode"
            customFunc={setMode()}
            color={currentColor}
            icon={mode === "dark" ? <CiDark /> : <BiSun />}
          />
          <NavButton
            title="mode"
            color={currentColor}
            icon={<HiOutlineSquares2X2 />}
          />
          <NavButton
            title="Notification"
            dotColor="rgb(254, 201, 15)"
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}
