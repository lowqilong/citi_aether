import React from "react";
import { Home1 } from "../../images/imgIndex";
import "./home.css";
import { Button } from "../Button";
const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home--wrapper">
          <h2>Investment made easier</h2>
          <p>Make your spare change work harder for you</p>
          <Button children="Learn How" />
        </div>

        <img src={Home1} alt="home img" />
      </div>
    </section>
  );
};

export default Home;
