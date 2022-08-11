import React from "react";
import { Intro1 } from "../../images/imgIndex";
import "./intro.css";
import { Button } from "../Button";
const Intro = () => {
  return (
    <section id='home'>
      <div className="intro">
        <div className="intro--wrapper">
          <h1>Make Your Spare Change Work For You</h1>
          <p>Aether Finance is a platform dedicated to providing young adults with the confidence and skills to achieve their financial goals. We believe that investing is not limited to the rich and famous.</p>
          <b>With an Aether account, a small amount of money is credited to your investments everytime you buy something from a store or online</b>
          <p>Sounds interesting? Find out more below</p>

          {/* <p>Investing is not restricted only to wealthy individuals. We all have to start somewhere.</p>
          <p>We believe it is important for each individual to be in control of their financial future</p>
          <p>As such, our mission is to empower and equip young adults with the confidence and skills to start their financial journeys - <b>One step at a time</b></p> */}
          {/* <Button children="Learn How (diagram of how things work)"/> */}
        </div>

        <img src={Intro1} alt="intro img" />
      </div>
    </section>
  );
};

export default Intro;
