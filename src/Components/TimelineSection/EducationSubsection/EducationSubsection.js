import React from 'react';
import './educationSubsection.css';

const EducationSubsection = () => {
    return(
        <div className="education-subsection subsection">
            <ul>
                <li>A levels</li>
                <li>Technical University Berlin</li>
            </ul>
            <div className="education-descriptions">
                <div></div>
                <div className="university-description">
                    <div>Computer Science Bachelor</div>
                    <span>October 2013 - now</span>
                    <p>software development specialisation</p>
                </div>
            </div>
        </div>
    );
}

export default EducationSubsection;