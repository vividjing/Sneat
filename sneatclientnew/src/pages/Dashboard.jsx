import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="ml-3 mt-3 mr-6">
      <Outlet />
    </div>
  );
}
