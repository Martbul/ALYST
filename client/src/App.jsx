import { Routes, Route } from "react-router-dom";
import { StrictMode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";
import AuthContext from "./contexts/authContext";
import * as authService from "./services/authService";

import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Profile from "./components/profile/Profile";
import SingUp from "./components/singup/SingUp";

import Login from "./components/login/Login";


import "./style1.css";
import "./public/scss2/main.scss";
import Logout from "./components/logout/Logout";
import LearnMore from "./components/learn-more/LearnMore";


import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import { ProfileProvider } from "./contexts/profileContext";


import Services from "./components/seriveces/Services";
import Service1 from "./components/service-1/Service1";
import Service2 from "./components/service-2/Service2";
import Service3 from "./components/service-3/Service3";
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProfileProvider>
          <Navigation />

          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.LearnMore} element={<LearnMore />} />

            <Route path={Path.About} element={<About />} />
            <Route path={Path.Services} element={<Services />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.Profile} element={<Profile />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

            <Route path={Path.SingUp} element={<SingUp />} />
            <Route path={Path.LogIn} element={<Login />} />
            <Route path={Path.Service1} element={<Service1 />} />
            <Route path={Path.Service2} element={<Service2 />} />
            <Route path={Path.Service3} element={<Service3 />} />

            <Route path={Path.WildCard} element={<NotFound />} />
          </Routes>

          <Footer />
        </ProfileProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
