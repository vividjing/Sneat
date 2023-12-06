import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  setThemeSettings,
  setMode,
  setCurrentColor,
  setBgColor,
} from "../state";
import { useDispatch } from "react-redux";

export default function ThemeSettings() {
  const { currentColor, mode } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  const themeColors = [
    {
      name: "blue-theme",
      color: "#696cff",
      backgroundColor: "#e7e7ff",
    },
    {
      name: "green-theme",
      color: "#71dd37",
      backgroundColor: "#e8fadf",
    },
    {
      name: "gray-theme",
      color: "#8592a3",
      backgroundColor: "#ebedf0",
    },
    {
      name: "red-theme",
      color: "#ff3e1d",
      backgroundColor: "#ffe0db",
    },
    {
      name: "indigo-theme",
      color: "#03c3ec",
      backgroundColor: "#d6f5fc",
    },
    {
      color: "#ffab00",
      name: "orange-theme",
      backgroundColor: "#fff1d6",
    },
  ];

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => dispatch(setThemeSettings(false))}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => dispatch(setMode("light"))}
              checked={mode === "light"}
            />

            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={() => dispatch(setMode("dark"))}
              className="cursor-pointer"
              checked={mode === "dark"}
            />

            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center"
                key={item.name}
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => {
                    dispatch(setCurrentColor(item.color));
                    dispatch(setBgColor(item.backgroundColor));
                    localStorage.setItem("color", item.color);
                    localStorage.setItem("bgColor", item.backgroundColor);
                  }}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === currentColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
