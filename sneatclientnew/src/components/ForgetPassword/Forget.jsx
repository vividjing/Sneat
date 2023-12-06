import React from "react";
import { useSelector } from "react-redux";
import ForgetV1 from "./ForgetV1";
import ForgetV2 from "./ForgetV2";

export default function Forget() {
  const { screenSize } = useSelector((state) => state.global);

  return <div>{screenSize > 960 ? <ForgetV1 /> : <ForgetV2 />}</div>;
}
