import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Analtytics from "../Analtytics/Analtytics";
import Ecommerce from "../eCommerce/Ecommerce";
import Crm from "../CRM/Crm";
import Calendar from "../Calendar/Schedule";
import Dashboard from "../../pages/Dashboard";
import AccountSetting from "../../pages/AccountSetting";
import ProfileChange from "../ProfileChange";
import PasswordChange from "../PasswordChange";
import NotFound from "../NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Forget from "../ForgetPassword/Forget";
import Layout from "../Layout1";
import Authorization from "../Authorization";

export default function RouteConfig() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<Forget />}></Route>
        <Route
          element={
            <Authorization>
              <Layout />
            </Authorization>
          }
        >
          <Route
            path="/"
            element={<Navigate to="/dashboard/analytics" replace />}
          />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="analytics" element={<Analtytics />} />
            <Route path="crm" element={<Crm />} />
            <Route path="ecommerce" element={<Ecommerce />} />
          </Route>
          {/* apps  */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="accountsetting" element={<AccountSetting />}>
            <Route path="account" element={<ProfileChange />} />
            <Route path="security" element={<PasswordChange />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
