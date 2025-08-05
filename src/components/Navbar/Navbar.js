import React from 'react'
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <span>Eddie's Portfolio</span>
            </div>
            <div className="choice">
                <ul>

                    <li> <a href="#about"> About Me </a>
                    </li>
                    <li> <a href="#experience"> Experience </a>
                    </li>
                    <li> <a href="#project"> Project </a>
                    </li>
                    <li> <a href="#contact"> Contact Me</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
