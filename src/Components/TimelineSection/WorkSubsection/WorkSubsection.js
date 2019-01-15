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
            </ul>
            <ul className="work-descriptions">
                <li className="freelance-description">
                    <div>&zwnj;</div>
                    <span>&zwnj;</span>
                    <p>HTML, CSS, vanilla JavaScript</p>
                </li>
                <li>
                    <div className="cubitabo-description">
                        <div>working student QA Engineer</div>
                        <span>Sep 2014 – Apr 2018 (3 years 8 months)</span>
                        <p>Responsible for Quality Assurance and Automation(Java + Selenium) while simultaneously holding the position of Scrum Master(enhanced by Attlasian's Jira and Confluence).  Additionally did research, roadmapping and management as I gained experience. </p>
                    </div>
                </li>
                <li>
                    <div className="siemens-description">
                        <div>working student Software Developer</div>
                        <span>April 2018 - now (
                        {
                            (() =>
                            {
                                let startedAtSiemens = moment('01/04/2018', 'DD/MM/YYYY');
                                let now = moment();
                                return now.diff(startedAtSiemens, 'months');  
                            })()

                        } months)</span>
                        <p>Developing a full stack web app with react & redux on the frontend, node.js(Express) on the backend and MongoDB </p>
                    </div>
                </li>
            </ul>
            
           

            
        </div>
    );
}


export default WorkSubsection;