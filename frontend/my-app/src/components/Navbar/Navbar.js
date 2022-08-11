import React, { useState, useEffect } from "react";
import { AccountItems } from "./AccountItems";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ logout }) {
  console.log(MenuItems);
  function handleScroll(e) {
    localStorage.setItem('lsLocation', e.toLowerCase())
    setLocation(localStorage.getItem('lsLocation'))
    document.getElementById(`${location}`)?.scrollIntoView();
  }


  const [location, setLocation] = useState(localStorage.getItem('lsLocation'))
  const [toggleMenu, setToggle] = useState(false);
  const [clicked, setClicked] = useState("");
  const [toggleDropDown, setDropDown] = useState(false);

  //scroll to view of localstorage variable
  useEffect(() => {
    document.getElementById(`${location}`)?.scrollIntoView();
    localStorage.removeItem('lsLocation')
  }, [location])

  return (
    <nav className="NavbarItems" style={{ marginBottom: '40px' }}>
      <div style={{ flexDirection: "row", display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{textDecoration: 'none'}}>
            <h2 className="navbar-logo">
            AETHER FINANCE
            </h2>
        </Link>
        {/* <img
          src={require("../../images/Penguin.png")}
          alt="Aether Finance Logo"
          className="logo-image"
        /> */}
      </div>
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
                setDropDown(false);
                setToggle(false);
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
      <ul className={toggleDropDown ? "account-menu active" : "account-menu"} style={{ zIndex: "1" }}>
        {AccountItems.map((item, index) => {
          return (
            <li
              key={index}
              onClick={function () {
                setClicked(item.title);
                setDropDown(!toggleDropDown);
              }}
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
        <li>
          <Button children="Logout" onClick={logout} />
        </li>
      </ul>
    </nav >
  );
}
