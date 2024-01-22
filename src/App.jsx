import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ImportantDates from "./pages/ImportantDates";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Committee from "./pages/Committee";
import Publication from "./pages/Publication";
import AboutUs from "./pages/AboutUs";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Sponsorship from "./pages/Sponsorship";
import Review from "./pages/Review";
import Test1 from "./pages/Test1";
import Venue from "./pages/Venue";
import PastConferences from "./pages/PastConferences";
import NotFound from "./pages/errors/NotFound";
import ComingSoon from "./pages/errors/ComingSoon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Test1 />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/review-process" element={<Review />}></Route> */}
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
        {/* <Route path="/speakers" element={<Speakers />}></Route> */}
        <Route
          path="/speakers"
          element={
            <ComingSoon
              span="Speakers"
              subheading="Anticipation builds as we craft an exceptional lineup of speakers! Stay tuned for a revelation of visionary voices shaping the discourse at iCORE 2024"
            />
          }
        ></Route>
        <Route path="/committee" element={<Committee />}></Route>
        {/* <Route
          path="/committee"
          element={
            <ComingSoon
              span="Committee"
              subheading="Our dedicated committee is hard at work curating an immersive experience. The unveiling is imminent! Watch this space for the brilliant minds orchestrating iCORE 2024."
            />
          }
        ></Route> */}
        {/* <Route path="/sponsorship" element={<Sponsorship />}></Route> */}
        <Route path="/venue" element={<Venue />}></Route>
        <Route path="/past-conferences" element={<PastConferences />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/publication" element={<Publication />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
