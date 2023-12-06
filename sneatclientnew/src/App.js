import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { setScreenSize, setIsLogged, setToken, setUserName } from "./state";

import { useSelector, useDispatch } from "react-redux";
import RouteConfig from "./components/RouteConfig/RouteConfig";

export default function App() {
  const { mode } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </div>
  );
}
