import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    const [toggleMenu, setToggle] = useState(false)
    const [clicked, setClicked] = useState("")

    return (
        <nav className="NavbarItems">
            <h2 className="navbar-logo">
                AETHER FINANCE
                <img src ={require("../../images/Penguin.png")} alt="Aether Finance Logo" className="logo-image"/>
            </h2>
            <div className="menu-icon" onClick={() => setToggle(!toggleMenu)}>
                <i className={toggleMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => setClicked(item.title)}>
                            <Link className={item.cName === "nav-links" ? clicked===item.title ? "nav-links active" : "nav-links" : "nav-links-mobile"} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign In</Button>
            <Button>Register</Button>
        </nav>
    )
}