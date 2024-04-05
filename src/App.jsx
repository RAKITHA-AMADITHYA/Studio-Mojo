import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BarLoader } from "react-spinners";
import ThemeProvider from "./theme";


const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./layouts/Layout"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/AboutUs"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const PersonalAccount = lazy(() => import("./pages/PersonalAccount"));
const BusinessAccount = lazy(() => import("./pages/BusinessAccount"));















function App() {
  return (
    <ThemeProvider>

      <Router>
        <Suspense
          fallback={
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <BarLoader color={"#0070C0"} loading={true} width={"100%"} />
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="resources" element={<Resources />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signup/personal-account" element={<PersonalAccount />} />
              <Route path="signup/business-account" element={<BusinessAccount />} />



            </Route>
          </Routes>
        </Suspense>
      </Router></ThemeProvider>
  );
}

export default App;
