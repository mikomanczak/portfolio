import React, {Component} from 'react';
import './projectsSection.css';

class ProjectsSection extends Component{
    render() {
        return(
            <section id="projects-section">
                    <div className="reactive-desktop-project-panel">
                    <h2 className="reactive-desktop-project-headline">Lexa</h2>
                        <p>
                            Voice Management System (similar to Amazon Alexa or Google Home).
                            Developed together with fellow students as part of our “Programmierpraktikum” (final practical assignment before bachelor thesis). 
                        </p>
                            <a href="https://mikomanczak.github.io/Lexa/"><button className="reactive-desktop-project-button-active">Demo</button></a>
                            <a href="https://github.com/mikomanczak/Lexa#source-code"><button className="reactive-desktop-project-button-active">Github</button></a>
                            
                    
                    </div>
            </section>
        );
    }
} 

export default ProjectsSection;