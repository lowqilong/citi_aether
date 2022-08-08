import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css"

export default function Navbar() {
    const [clicked, setClicked] = useState(false)

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                AETHER FINANCE<img src ={require("../../images/Penguin.png")} className="fab fa-react"/>
            </h1>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign In</Button>
        </nav>
    )
}