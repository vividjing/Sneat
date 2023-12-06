import React from "react";
import { useSelector } from "react-redux";
import RegisterV1 from "./RegisterV1";
import RegisterV2 from "./RegisterV2";

export default function Register() {
  const { screenSize } = useSelector((state) => state.global);

  return <div>{screenSize > 960 ? <RegisterV1 /> : <RegisterV2 />}</div>;
}
