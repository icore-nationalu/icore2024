import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import CountdownTimer from "../components/CountdownTimer";
import BU from "../assets/images/collaborators/bicol-university.png";
import DMMMSU from "../assets/images/collaborators/don-mariano-marcos-memorial-state-university.png";
import USC from "../assets/images/collaborators/university-of-san-carlos.png";
import UTC from "../assets/images/collaborators/university-of-the-cordilleras.png";
import NU from "../assets/images/collaborators/national-university-large.png";
import NUMOA from "../assets/images/collaborators/national-university.svg";
import AUFE from "../assets/images/collaborators/anhui-university-of-finance-and-economics.png";

const Test = () => {
  const collaborators = [
    {
      name: "Bicol University",
      image: BU,
      imageSize: "sm",
    },
    {
      name: "University of the Cordilleras",
      image: UTC,
      imageSize: "sm",
    },
    {
      name: "Don Mariano Marcos Memorial State University",
      image: DMMMSU,
      imageSize: "sm",
    },
    {
      name: "University of San Carlos",
      image: USC,
      imageSize: "sm",
    },
    {
      name: "National University - MOA",
      image: NUMOA,
      imageSize: "sm",
    },
    {
      image: AUFE,
      imageSize: "lg",
    },
  ];

  return (
    <>
      <h1>TEST</h1>
      <section className="test">
        <div className="wrapper">
          <div className="collaborators-container">
            {collaborators.map(({ name, image, imageSize }, i) => {
              return (
                <div className={`collaborator-item ${imageSize}`} key={i}>
                  <div className="image-wrapper">
                    <img src={image} alt={name} />
                  </div>
                  {name && <p>{name}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Test;
