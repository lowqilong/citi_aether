import React from "react";
import { Intro1 } from "../../images/imgIndex";
import "./intro.css";
import { Button } from "../Button";
const Intro = () => {
  return (
    <section>
      <div className="intro">
        <div className="intro--wrapper">
          <h2>Investment made easier</h2>
          <small>Make your spare change work harder for you</small>
          <Button children="Learn How" />
        </div>

        <img src={Intro1} alt="intro img" />
      </div>
    </section>
  );
};

export default Intro;
