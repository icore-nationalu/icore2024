import { useState } from "react";
import TestImage from "../assets/test-image.png";
const Publication = () => {
  return (
    <>
      <section id="publication">
        <div className="header-wrapper">
          <span>Publication</span>
          <h1 className="heading">
            Discovering Excellence in Research Databases
          </h1>
          <p className="subheading">
            All accepted papers that have been successfully registered will be
            included in the conference proceedings through the IEEE Conference
            Publishing Services.
          </p>
        </div>
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={TestImage} alt="" />
          </div>
        </div>
      </section>
      <section className="acad-db-wrapper">
        <div className="wrapper">
          <p>Papers submitted to academic databases</p>
          <div className="acad-db">
            <div className="acad-db-item"></div>
            <div className="acad-db-item"></div>
            <div className="acad-db-item"></div>
            <div className="acad-db-item"></div>
            <div className="acad-db-item"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Publication;
