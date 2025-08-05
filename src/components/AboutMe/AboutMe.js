import "./AboutMe.css";
import React from 'react';
export default function AboutMe() {
    return (
        <div id="about" className="about-me-container">
            <h2>About Me</h2>
            <div className="about-me-bottom">
                <img src={require("../../assets/AboutMe/handsomeman.jpg")} alt="handsome man" />
                <div className="about-me-description">
                    <p>
                        My name is Eddie Xiao. I am a third-year student in the School of Engineering at UVA, planning to double major in Computer Science and Economics.
                        <br /><br />
                        I am involved in several clubs, including the Mars Robotics Club, Chess Club, Hoos Fly, and the ML Club.
                        <br /><br />
                        I am seeking internships and research opportunities to further develop my technical skills. I am particularly interested in AI, ML, software engineering, or cybersecurity positions.
                        <br /><br />
                        Outside of academics, I love traveling around the world, cooking (and eating) fancy food, and playing the piano.
                    </p>
                    <h4>Skills and Experience</h4>
                    <ul>
                        <li>
                            <p>Full-stack web development and Machine Learning</p>
                        </li>
                        <li>
                            <p>Experienced in Java, Python, C, R, Chinese, and English</p>
                        </li>
                        <li>
                            <p>Familiar with React, scikit-learn, pandas, Flask, MySQL, and several other libraries and frameworks</p>
                        </li>
                        <li>
                            <p>Proficient with Android Studio, VS Code, IntelliJ, Eclipse, Figma, and many other tools</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
