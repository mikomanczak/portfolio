import React from 'react';
import './timelineSection.css'
import WorkSubsection from './WorkSubsection/WorkSubsection'
import EducationSubsection from './EducationSubsection/EducationSubsection';

const TimelineSection = () => {
    return(
        <section id="timeline-section">
            <h2 className="timeline-section-headline">My last few years as a timeline</h2>
            <EducationSubsection />
            <WorkSubsection />
            <div className="timeline">
                <ul>
                    <li>2013</li>
                    <li>2014</li>
                    <li>2015</li>
                    <li>2016</li>
                    <li>2017</li>
                    <li>2018</li>
                    <li>2019</li>
                </ul>
            </div>
        </section>
    );
}

export default TimelineSection;