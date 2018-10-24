import React, {Component} from 'react';
import './projectsSection.css';

class ProjectsSection extends Component{
    render() {
        return(
            <section id="projects-section">
                    <div className="reactive-desktop-project-panel">
                    <h2 className="reactive-desktop-project-headline">Reactive Desktop Project</h2>
                        <p>Early 2018 I came up with an idea to recreate my desktop
                            (with all the folders and files) as a web app. 
                            I tweaked it since then to be more entertaining.
                            It's probably the best place to get to know me. </p>
                            <a href="https://mikomanczak.github.io/Reactive-Desktop-Project/"><button className="reactive-desktop-project-button-active">Demo</button></a>
                            <a href="https://github.com/mikomanczak/Reactive-Desktop-Project"><button className="reactive-desktop-project-button-active">GitHub</button></a>
                            
                    
                    </div>
            </section>
        );
    }
} 

export default ProjectsSection;