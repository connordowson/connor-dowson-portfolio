import React from 'react'
import './../css/main.scss'
// require("./../assets/tsd-image.jpeg")

//Main component which will contain all other child components
export default class Home extends React.Component{

    render(){

        return(

            <div id="home-container">

                <Navbar />
            
                <TitlePanel />

                <SectionHeading heading={"Projects"}/>

                <Projects projects={this.props.projects}/>

                <SectionHeading heading={"About Me"}/>

                <AboutMe />

                <SectionHeading heading={"Contact Me"}/>


            </div>

        );

    }

}

//Navbar
class Navbar extends React.Component{
    
    render(){
    
        return(
    
            <nav id="navbar">
    
                <h1> Connor Dowson </h1>

                <ul>
                    <a> Home </a>
                    <a> Projects </a>
                    <a> Blog </a>
                    <a> Contact </a>

                </ul>
    
            </nav>
    
        );
    
    }
    
}

//Title panel
class TitlePanel extends React.Component{
    
    render(){
    
        return(
    
            <div id="title-panel">
    
                <h1> Connor Dowson: Computing Student University of Gloucestershire </h1>

            </div>
    
        );
    
    }
    
}

//Section headings
class SectionHeading extends React.Component{
    
    render(){
    
        return(
    
            <h1 className="section-heading">
                    
                {this.props.heading}

            </h1>
    
        );
    
    }
    
}

//All project cards
class Projects extends React.Component{

    render(){

        return(

            <div className="projects-container">

                {this.props.projects.map((project, index) => {

                    return(

                        <ProjectCard  projectTitle={project.title} projectImage={project.image} projectDescription={project.description} projectSkills={project.skills} projectDemo={project.demo} projectCode={project.code} key={index} />

                    )

                })}

            </div>

        )

    }

}



//Project cards template
class ProjectCard extends React.Component{

    componentDidMount(){

        this.refs.screenshot.style.background = "url('./assets/" + this.props.projectImage + "')";
        this.refs.screenshot.style.backgroundSize = "cover";

    }

    render(){
    
        return(
    
            <div className="project-card">
    
                <div className="project-screenshot" ref="screenshot"> </div>
            
                <div className="project-info">

                    <h2> {this.props.projectTitle} </h2>

                    <p> {this.props.projectDescription} </p>

                    <ProjectSkills skills={this.props.projectSkills} />

                    <ProjectLinks demo={this.props.projectDemo} code={this.props.projectCode} />

                </div>
    
            </div>
    
        );
    
    }
    
}


//Populates the project skills from the data
class ProjectSkills extends React.Component{
    
    render(){
    
        return(
    
            <div className="project-skills"> 
                
                {this.props.skills.map((skill, index) => {
    
                    return(
                    
                        <ProjectSkill skill={skill} key={index} />
                        
                    )
    
                })}
                
            </div>
    
        )
    
    }
    
}

//Each individual skill
class ProjectSkill extends React.Component{
    
    render(){
    
        return(
    
            <a> {this.props.skill} </a>
    
        );
    
    }
    
}

//Populates the project links from the data
class ProjectLinks extends React.Component{
    
    render(){
    
        return(
    
            <div className="project-buttons"> 
                
                <a href={this.props.demo} target="_blank"> View Demo </a>
                
                <a href={this.props.code} target="_blank"> View Code </a>
                
            </div>
    
        )
    
    }
    
}

//About me section
class AboutMe extends React.Component{
    
    render(){
    
        return(
    
            <div id="about-me">

               <p> hey </p>


            </div>
        );
    
    }
    
}