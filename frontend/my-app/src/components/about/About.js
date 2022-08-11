import React from "react";
import "./about.css";
import { About1, chart1, chart2 } from "../../images/imgIndex";
const data = [
  {
    index:1,
    title: "Step 1: Sign Up For An Account",
    content:
      "Create your account and Aether Portfolio in 5 minutes",
    img: About1,
  },
  {
    index:2,
    title: "Step 2: Invest with any amount",
    content:
      `Set manageable amounts to invest. Helping you with dollar-cost averaging that will reward you in the long run
      \n (Need help? Consult our friendly guides)`,
    img: chart1,
  },
  {
    index:3,
    title: "Step 3: Build Relationships, Hone Your Skills",
    content:
      "Engage with our Financial Experts, industry professionals and fellow Aether peers through social and online events. Build meaningful relationships and improve your financial skills at the same time",
    img: chart2,
  },
];
const About = () => {
  return (
    <section id='about'>
      <div className="about">
        <h1>How It Works</h1>

        <div className="about--container">
          {data.map(({ index, title, content, img }) => {
            return (
              <div key={index} className={Number(index)%2===0?'about--wrapper2':'about--wrapper'}>
                <div >
                  <h2>{title}</h2>
                  <h5>{content}</h5>
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
