import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render() {
        let projectItems;
        console.log(this.props.projects);
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (<ProjectItem key={project.title} project={project} />);
            });
        }
        return (
            <div className="Projects">
                cfgjhfvhg
                {projectItems}
            </div>
        );
    }
}

export default Projects;
