import React from 'react'
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="container">
            <div className="footer-content">
                <p>&copy; 2024 Hanjun (Eddie) Xiao. Live Free or Die.</p>
            </div>
            <ul className="contacts">
                <li className="contact">
                    <img src={require("../../assets/Footer/linkedin.png")} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/hanjun-xiao-92a3b02b9/" target="_blank"> www.linkedin.com/in/hanjun-xiao-92a3b02b9/</a>
                </li>
                <li className="contact">
                    <img src={require("../../assets/Footer/gmail.png")} alt="Gmail Icon" />
                    <a href="mailto:eddiexiao2019@gmail.com">eddiexiao2019@gmail.com</a>
                </li>
                <li className="contact">
                    <img src={require("../../assets/Footer/github.png")} alt="Github Icon" />
                    <a href="https://github.com/eddieX-2021" target="_blank">github.com/eddieX-2021</a>
                </li>
            </ul>

        </footer>
    )
}
