import React from "react";
import { TypeAnimation } from 'react-type-animation';

import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/profile.php?id=100046803222580">
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a href="https://www.instagram.com/eddie_x05/">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="https://www.youtube.com/@eddiexiao4295">
                                <i className="fa fa-youtube-square" />
                            </a>
                            <a href="https://www.linkedin.com/in/hx2021/">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="https://github.com/eddieX-2021">
                                <i className="fa fa-github" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Eddie</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <TypeAnimation
                                    sequence={[
                                        "AI/Machine Learning 🌐",
                                        1000,
                                        "Full stack Developer 💻",
                                        1000,
                                        "Economic Expert 📱",
                                        1000,
                                        "Master Chef 🔴",
                                        1000,
                                        "Pianist 😎",
                                        1000,
                                    ]}
                                    repeat={Infinity}
                                    />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            "Live Free or Die"
                        </span>
                    </div>

                    <div className="profile-options">
                        <a href="#contact">  <button className="btn primary-btn"
                        >Hire Me </button></a>
                        {/* <a href="Resume- Hanjun Xiao.pdf" download="Resume- Hanjun Xiao.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a> */}
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}