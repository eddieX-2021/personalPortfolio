import React from 'react'
import "./Footer.css"

export default function Footer() {
  // Reads the build‐time var, or falls back to YYYY-MM-DD today
  const lastUpdated =
    process.env.NEXT_PUBLIC_LAST_UPDATED ||
    new Date().toISOString().split("T")[0]

  return (
    <footer className="container">
      <div className="footer-content">
        <p className="copyright">
          &copy; 2025 Hanjun (Eddie) Xiao. Live Free or Die.
        </p>
        <p className="footer-updated">Last updated: {lastUpdated}</p>
      </div>

      <ul className="contacts">
        <li className="contact">
          <img
            src={require("../../assets/Footer/linkedin.png")}
            alt="LinkedIn Icon"
          />
          <a
            className="link"
            href="https://www.linkedin.com/in/hanjun-xiao-92a3b02b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hanjun-xiao-92a3b02b9
          </a>
        </li>

        <li className="contact">
          <img
            src={require("../../assets/Footer/gmail.png")}
            alt="Gmail Icon"
          />
          <a className="link" href="mailto:eddiexiao2019@gmail.com">
            eddiexiao2019@gmail.com
          </a>
        </li>

        <li className="contact">
          <img
            src={require("../../assets/Footer/github.png")}
            alt="GitHub Icon"
          />
          <a
            className="link"
            href="https://github.com/eddieX-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/eddieX-2021
          </a>
        </li>
      </ul>
    </footer>
  )
}
