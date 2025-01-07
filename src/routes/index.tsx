import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC = () => (
  <Routes>
  <Route path="/" element={<ProtectedRoute element={<SignIn />}/>}/>
  <Route path="/signup" element={<ProtectedRoute element={<SignUp />}/>}/>
  <Route path="/forgot-password" element={<ProtectedRoute element={<ForgotPassword />}/>}/>
  <Route path="/reset-password" element={<ProtectedRoute element={<ResetPassword />}/>}/>
  <Route path="/profile" element={<ProtectedRoute element={<Profile />} isPrivate />} />
  <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isPrivate />}/>
</Routes>
);


export default AppRoutes
