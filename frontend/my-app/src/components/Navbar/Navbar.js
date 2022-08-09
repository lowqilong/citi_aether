import React, { useState } from "react";
import { AccountItems } from "./AccountItems";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  function handleScroll(e) {
    const element = e.toLowerCase();
    document.getElementById(`${element}`)?.scrollIntoView();
  }

  const [toggleMenu, setToggle] = useState(false);
  const [clicked, setClicked] = useState("");
  const [toggleDropDown, setDropDown] = useState(false);

  return (
    <nav className="NavbarItems">
      <h2 className="navbar-logo">
        AETHER FINANCE
        <img
          src={require("../../images/Penguin.png")}
          alt="Aether Finance Logo"
          className="logo-image"
        />
      </h2>
      <div className="menu-icon" onClick={() => setToggle(!toggleMenu)}>
        <i className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              onClick={function (e) {
                setClicked(item.title);
                handleScroll(e.target.innerText);
              }}
            >
              <Link
                className={
                  item.cName === "nav-links"
                    ? clicked === item.title
                      ? "nav-links active"
                      : "nav-links"
                    : "nav-links-mobile"
                }
                to={item.url}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <img
        src={require("../../images/profilepic.png")}
        alt="Profile Picture"
        className="profile-picture"
        onClick={() => setDropDown(!toggleDropDown)}
      />
      <ul className={toggleDropDown ? "account-menu active" : "account-menu"}>
        {AccountItems.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setClicked(item.title)}
              className={
                clicked === item.title
                  ? "account-links active"
                  : "account-links"
              }
            >
              <Link
                to={item.url}
                className={
                  clicked === item.title
                    ? "account-links active"
                    : "account-links"
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
