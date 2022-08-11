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
    <div className='footer' style={{ padding: "20px" }}>
      <div>
        <h1>AETHER</h1>
        <small>FINANCE</small>
      </div>
    </div>
  )
}

export default Footer