import React, { useState } from "react";
import './footer.css'
import { MenuItems } from '../Navbar/MenuItems'
import { Link } from "react-router-dom";
const Footer = () => {
  const [clicked, setClicked] = useState("");
  const [location, setLocation] = useState(localStorage.getItem('lsLocation'))
  function handleScroll(e) {
    localStorage.setItem('lsLocation', e.toLowerCase())
    setLocation(localStorage.getItem('lsLocation'))
    document.getElementById(`${location}`)?.scrollIntoView();

  }
  return (
    <div className='footer'>
      <div>
        <h1>AETHER</h1>
        <small>FINANCE</small>
      </div>
      <div className='footer-nav'>

        {MenuItems.map((item, index) => {
          return (
            <div
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
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default Footer