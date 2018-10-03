import React from 'react';
import './welcomeSection.css';
import profileImg from './profile.jpg';
import cvIcon from './cvicon.png';
import githubIcon from './github.png';
import linkedinIcon from './linkedin.png';


const WelcomeSection = () => {
    return(
        <section id="welcome-section">
            <div className="profile-panel">
                <img src={profileImg} className="profile-image" alt="profile picture" />
                <h2 className="name-headline">Mikołaj Mańczak</h2>
                <ul className="profile-description">
                    <li>- 24 years old</li>
                    <li>- Computer science student at Technical University Berlin</li>
                    <li>- working student software developer at Siemens</li>
                    <li>- adaptable and self motivated learner</li>
                </ul>
                <div className="profile-icons">
                    <a href="https://linkedin.com/in/mikolaj-manczak/" className="linkedin" target="_blank">
                        <img src={linkedinIcon} className="profile-icon" alt="linkedIn icon" />
                    </a>
                    <a href="https://github.com/mikomanczak" className="github" target="_blank">
                        <img src={githubIcon} className="profile-icon" alt="gitHub icon" />
                    </a>
                    <a href="/cv.pdf" className="cv" target="_blank">
                        <img src={cvIcon} className="profile-icon" alt="CV icon" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default WelcomeSection;