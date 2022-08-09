import React from "react";
import "./about.css";
import { About1, chart1, chart2 } from "../../images/imgIndex";
const data = [
  {
    index:1,
    title: "Growing Your Knowledge",
    content:
      "Taking you a step at a time into having financial literacy to begin and manage your journey in micro-investing",
    img: About1,
  },
  {
    index:2,
    title: "Bite-sized investments",
    content:
      "Set managable amounts to invest. Helping you with dollar-cost averaging that will reward you in the long run",
    img: chart1,
  },
  {
    index:3,
    title: "Connecting you",
    content:
      "We connect you to professionals to better advise and manage your portfolio",
    img: chart2,
  },
];
const About = () => {
  return (
    <section>
      <div className="about">
        <small>What We Do?</small>

        <div className="about--container">
          {data.map(({ index, title, content, img }) => {
            return (
              
              <div key={index} className={Number(index)%2===0?'about--wrapper2':'about--wrapper'}>
                <div >
                  <h1>{title}</h1>
                  <p>{content}</p>
                </div>
                <img src={img} alt="about" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
