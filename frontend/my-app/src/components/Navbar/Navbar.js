import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css"

export default function Navbar() {
    const [clicked, setClicked] = useState('Home')

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                AETHER FINANCE<img src ={require("../../images/Penguin.png")} className="fab fa-react"/>
            </h1>
            <div className="menu-icon">
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {console.log(clicked)}
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => setClicked(item.title)}>
                            
                            <a className={clicked===item.title ? "nav-links active" : "nav-links"} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Button>Sign In</Button>
            <Button>Register</Button>
        </nav>
    )
}