import React from 'react';
import './Experience.css';

export default function Experience() {
    return (
        <section id="experience" className="experience-container">
            <h2>Experience</h2>
            <div className="section">
                <h4 id="research">Research</h4>
                <div className="research-item">
                    <img src={require("../../assets/Experience/matlab.png")} alt="image of gui research" id="gui" />
                    <div className="text-container">
                        <h5>
                            <a href="https://github.com/Ai4Math/MATLAB-GUI" target="_blank" rel="noopener noreferrer">
                                Applied Math MATLAB App Development
                            </a>
                        </h5>
                        <p>
                            Heze Chen, Huy Nguyen, Hanjun Xiao, Artun Duransoy, Shriya Dale
                        </p>
                        <ul>
                            <li>
                                Designed graphical user interfaces (GUIs) using Python and MATLAB to visualize multivariable calculus and linear algebra concepts.
                            </li>
                            <li>
                                Demonstrated application during lectures to over 200 students each semester, serving as a tool to help students gain a better understanding of mathematical concepts.
                            </li>
                        </ul>
                    </div>
                </div>

                <h4 id="work-experience">Work Experience</h4>
                <div className="work-item">
                    <img src={require("../../assets/Experience/cardisplay.png")} alt="image of truck app" id="truck-app" />
                    <div className="text-container">
                        <h5>
                            <a href="https://github.com/eddieX-2021/CarDisplay" target="_blank" rel="noopener noreferrer">
                                Truck Readiness App
                            </a>
                        </h5>
                        <p>
                            Project for a large storage company in China. The program helps truck drivers identify if their truck is ready to go.
                        </p>
                        <ul>
                            <li>
                                Designed and implemented a logistics control program, centralizing truck status updates in real-time to streamline operations for a large trucking company.
                            </li>
                            <li>
                                Delivered a solution still in use by the company, enhancing workflow and improving decision-making with real-time data.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
