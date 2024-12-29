import React from 'react';
import './Project.css';

export default function Project() {
    return (
        <div id="project" className="project-container">
            <h2>Projects</h2>
            <div className="section">
                <div className="project-item">
                    <img src={require("../../assets/Project/recipe.png")} alt="Recipe Finder App" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://www.youtube.com/watch?v=FlYsB-SBM1s&ab_channel=EddieXiao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Recipe Finder
                            </a>
                        </h5>
                        <p>
                            An Android app for tailored recipe suggestions:
                        </p>
                        <ul>
                            <li>Utilized ingredient-based search to suggest recipes.</li>
                            <li>Enhanced meal planning with user-friendly design.</li>
                            <li>Improved user retention with a clean interface.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/mlbeginner.png")} alt="Machine Learning Beginner Project" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/eddieX-2021/MLbeginnerProject"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Machine Learning Beginner Project
                            </a>
                        </h5>
                        <p>
                            Built foundational skills in machine learning:
                        </p>
                        <ul>
                            <li>Predicted rainfall using Scikit-learn and Pandas.</li>
                            <li>Visualized results using Matplotlib for clarity.</li>
                            <li>Gained insights into weather pattern prediction.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/egg.png")} alt="Eggs By The Dozen" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/3amBEANS/EggsByTheDozen"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Eggs By The Dozen
                            </a>
                        </h5>
                        <p>
                            Developed a tool to detect parasites in egg images:
                        </p>
                        <ul>
                            <li>Collaborated with local farmers for dataset creation.</li>
                            <li>Applied machine learning techniques for image analysis.</li>
                            <li>Reduced inspection time and improved accuracy.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/restu.png")} alt="Restaurant Recommendation" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/eddieX-2021/restaurant-recommandation"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Restaurant Recommendation
                            </a>
                        </h5>
                        <p>
                            Personalized restaurant recommendation system:
                        </p>
                        <ul>
                            <li>Used ML methods to analyze user preferences.</li>
                            <li>Integrated Google Maps API for location-based results.</li>
                            <li>Improved user satisfaction through tailored suggestions.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/todo.png")} alt="To-Do List App" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/eddieX-2021/TodoList"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                To-Do List App
                            </a>
                        </h5>
                        <p>
                            Flask-based task management app:
                        </p>
                        <ul>
                            <li>Built a responsive frontend with HTML and JavaScript.</li>
                            <li>Implemented efficient task creation and editing.</li>
                            <li>Integrated Flask backend for data management.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/course.png")} alt="Course Review Website" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/orgs/uva-cs3140-fa24/teams/hw6-pym4ns-uyh9nu-mgn3uh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Course Review Website
                            </a>
                        </h5>
                        <p>
                            Java-based platform for course reviews:
                        </p>
                        <ul>
                            <li>Developed SQL backend for reliable data storage.</li>
                            <li>Enabled users to leave ratings and detailed reviews.</li>
                            <li>Provided an intuitive user interface for navigation.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <img src={require("../../assets/Project/portfolio.png")} alt="Personal Portfolio" />
                    <div className="text-container">
                        <h5>
                            <a
                                href="https://github.com/orgs/uva-cs3140-fa24/teams/hw6-pym4ns-uyh9nu-mgn3uh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Personal Portfolio
                            </a>
                        </h5>
                        <p>
                            Showcased projects and skills on a personal website:
                        </p>
                        <ul>
                            <li>Built with React for a dynamic and responsive layout.</li>
                            <li>Integrated EmailJS for contact form functionality.</li>
                            <li>Highlighted skills and projects effectively.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
