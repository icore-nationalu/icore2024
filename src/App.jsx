import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CallForPaper from "./pages/CallForPaper";
import Registration from "./pages/Registration";
import ImportantDates from "./pages/ImportantDates";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import PastConferences from "./pages/PastConferences";
import Committee from "./pages/Committee";
import Submission from "./pages/Submission";

import NotFound from "./pages/errors/NotFound";
import ComingSoon from "./pages/errors/ComingSoon";
import Test from "./pages/Test";

import ReactGA from "react-ga4";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const loc = location.pathname.replaceAll("-", " ").replace("/", "");

    const title = loc.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: title,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/call-for-papers" element={<CallForPaper />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/important-dates" element={<ImportantDates />}></Route>
        {/* <Route path="/program" element={<Program />}></Route> */}
        <Route
          path="/program"
          element={
            <ComingSoon
              span="Program"
              subheading="Excitement is building for iCORE 2024! Our team is meticulously shaping a dynamic program. The curtain will rise soon on an agenda that promises inspiration and innovation."
            />
          }
        ></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/venue" element={<Venue />}></Route>
        <Route path="/past-conferences" element={<PastConferences />}></Route>
        <Route path="/committee" element={<Committee />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
