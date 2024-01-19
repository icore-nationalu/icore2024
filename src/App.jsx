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
import Test1 from "./pages/Test1";
import Venue from "./pages/Venue";
import PastConferences from "./pages/PastConferences";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/test" element={<Test1 />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/important-dates" element={<ImportantDates />}></Route>
        {/* <Route path="/program" element={<Program />}></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/committee" element={<Committee />}></Route> */}
        <Route path="/venue" element={<Venue />}></Route>
        <Route path="/past-conferences" element={<PastConferences />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/publication" element={<Publication />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
