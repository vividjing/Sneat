import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

import ThemeSettings from "./ThemeSettings";
import { setMode, setThemeSettings, setCurrentColor } from "../state";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      dispatch(setCurrentColor(currentThemeColor));
      dispatch(setMode(currentThemeMode));
    }
  }, []);
  const { activeMenu, currentColor, themeSettings } = useSelector(
    (state) => state.global
  );

  return (
    <div className="flex min-h-full relative dark:bg-main-dark-bg dark:text-white/60">
      <div className="fixed right-0 top-1/2" style={{ zIndex: "1000" }}>
        <button
          type="button"
          onClick={() => dispatch(setThemeSettings(true))}
          className="text-2xl rounded-l text-white p-1"
          style={{ background: currentColor }}
        >
          <FiSettings />
        </button>
      </div>

      {activeMenu ? (
        <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg dark:text-white/60 bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}

      <div
        className={`dark:bg-main-dark-bg dark:text-white/60 mr-0 ml-0  w-[100%-60px] min-h-screen sm:overflow-visible sm:min-h-full ${
          activeMenu ? "md:ml-60" : "flex-2"
        }`}
      >
        <div className="fixed md:static dark:bg-main-dark-bg ml-0 mr-0 w-full navebar">
          <Navbar />
          <div className="dark:bg-main-dark-bg">
            {themeSettings && <ThemeSettings />}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
