import React from "react";
import { useSelector } from "react-redux";
import LoginV1 from "./LoginV1";
import LoginV2 from "./LoginV2";

export default function Login() {
  const { screenSize } = useSelector((state) => state.global);

  return <div>{screenSize > 960 ? <LoginV1 /> : <LoginV2 />}</div>;
}
