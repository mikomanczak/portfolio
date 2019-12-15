import React from 'react';
import moment from 'moment';
import './workSubsection.css';



const WorkSubsection = () => {
    return(
        <div className="work-subsection subsection">
            <ul className="work-timeline">
                <li>Freelance</li>
                <li>Cubitabo</li>
                <li>Siemens</li>
                <li id="axel-springer-timeline">Axel Springer</li>
            </ul>
            <ul className="work-descriptions">
                <li className="freelance-description">
                    <div className="work-title">Freelancer</div>
                    <span className="work-description">HTML, CSS, vanilla JavaScript</span>
                </li>
                <li>
                    <div className="cubitabo-description">
                        <div className="work-title">QA Automation & DevOps Engineer (student)</div>
                        <span className="work-description">Java, Selenium</span>
                    </div>
                </li>
                <li>
                    <div className="cubitabo-description">
                        <div className="work-title">Scrum Master & Technical Product Manager (student)</div>
                        <span className="work-description">data analysis, technical research, roadmapping</span>
                    </div>
                </li>
                <li>
                    <div className="siemens-description">
                        <div className="work-title">Software Engineer (student)</div>
                        <span className="work-description">React, Redux, Node.js(Express), MongoDB</span>
                    </div>
                </li>
                <li>
                    <div className="axel-springer-description">
                        <div className="work-title">Software Engineer</div>
                        <span className="work-description">React, TypeScript, Node.js, AWS</span>
                    </div>
                </li>
            </ul>
            
           

            
        </div>
    );
}


export default WorkSubsection;