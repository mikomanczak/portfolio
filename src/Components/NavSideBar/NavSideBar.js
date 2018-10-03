import React, {Component} from 'react';
import './navSideBar.css';

class NavSideBar extends Component{

    state={
        currentlyHovered: null,
        homeIconColor: 'white',
        timelineIconColor: 'white',
        projectsIconColor: 'white',
        contactIconColor: 'white'
    }

    setCurrentlyHovered = (currentlyHovered) => {
        this.setState({
            currentlyHovered: currentlyHovered
        });
    }

    resetCurrentlyHovered = () => {
        this.setState({
            currentlyHovered:null
        });
    }

    handleScroll = () => {
        //home icon
        if(window.scrollY > 0.65 * window.innerHeight -40 && window.scrollY < 1.65*window.innerHeight -40){
            this.setState({
                homeIconColor: 'black'
            })
        }
        else{
            this.setState({
                homeIconColor:'white'
            })
        }
        //timeline icon
        if(window.scrollY > 0.65 * window.innerHeight -80 && window.scrollY < 1.65*window.innerHeight -80){
            this.setState({
                timelineIconColor: 'black'
            })
        }
        else{
            this.setState({
                timelineIconColor:'white'
            })
        }
        //projects icon
        if(window.scrollY > 0.65 * window.innerHeight -160 && window.scrollY < 1.65*window.innerHeight - 180){
            this.setState({
                projectsIconColor: 'black'
            })
        }
        else{
            this.setState({
                projectsIconColor:'white'
            })
        }
         //contact icon
         if(window.scrollY > 0.65 * window.innerHeight -200 && window.scrollY < 1.65*window.innerHeight - 240){
            this.setState({
                contactIconColor: 'black'
            })
        }
        else{
            this.setState({
                contactIconColor:'white'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
            <nav className="nav-side-bar">
                 
                <a href="#welcome-section" className={'side-bar-link side-bar-link-'+this.state.homeIconColor} onMouseOver={ () => this.setCurrentlyHovered('Home')} onMouseLeave={this.resetCurrentlyHovered}> 
                    <i className="material-icons">home</i>
                    <div>
                    {this.state.currentlyHovered == 'Home'? (<span>Home</span>):(null)}
                    </div>
                </a>

                <a href="#timeline-section" className={'side-bar-link side-bar-link-'+this.state.timelineIconColor} onMouseOver={ () => this.setCurrentlyHovered('Timeline')} onMouseLeave={this.resetCurrentlyHovered}> 
                    <i className="material-icons">timeline</i>
                    <div>
                    {this.state.currentlyHovered === 'Timeline'? (<span>Timeline</span>):(null)}
                    </div> 
                </a>

                <a href="#projects-section" className={'side-bar-link side-bar-link-'+this.state.projectsIconColor} onMouseOver={ () => this.setCurrentlyHovered('Projects')} onMouseLeave={this.resetCurrentlyHovered}> 
                    <i className="material-icons">code</i> 
                    <div>
                    {this.state.currentlyHovered === 'Projects'? (<span>Projects</span>):(null)} 
                    </div>
                </a>

                <a href="#footer" className={'side-bar-link side-bar-link-'+this.state.contactIconColor} onMouseOver={ () => this.setCurrentlyHovered('Contact')} onMouseLeave={this.resetCurrentlyHovered}> 
                    <i className="material-icons">mail</i> 
                    <div>
                    {this.state.currentlyHovered === 'Contact'? (<span>Contact</span>):(null)} 
                    </div>
                </a>
            </nav>
        );
    }
}

export default NavSideBar;