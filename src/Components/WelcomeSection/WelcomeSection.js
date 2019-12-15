import React from 'react';
import moment from 'moment';
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
                    <li>- Software Engineer at Axel Springer</li>
                    <li>- Computer science student at Technical University Berlin</li>
                    <li>- Adaptable and self motivated learner</li>
                </ul>
                <div className="profile-icons">
                    <a href="https://linkedin.com/in/mikolaj-manczak/" className="linkedin" target="_blank">
                        <img src={linkedinIcon} className="profile-icon" alt="linkedIn icon" />
                    </a>
                    <a href="https://github.com/mikomanczak" className="github" target="_blank">
                        <img src={githubIcon} className="profile-icon" alt="gitHub icon" />
                    </a>
                    <a href="https://raw.githubusercontent.com/mikomanczak/Portfolio/aa55bef33ed270ddef067444fd49f45c6f36e086/CV.pdf" className="cv" target="_blank">
                        <img src={cvIcon} className="profile-icon" alt="CV icon" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default WelcomeSection;