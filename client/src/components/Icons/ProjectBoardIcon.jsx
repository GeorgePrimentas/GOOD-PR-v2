import ProjectBoardIcon from "../../images/github-project-icon.svg";
import "./ProjectBoardIcon.css"




const ProjectBoardIconSvg = () => {
    return (
        <div className="icons-container">
       <a 
       className="project-board-icon" 
        href="https://github.com/Gayle-Thompson-Igwebike/GOOD-PR-v1">
       <img src={ProjectBoardIcon} alt="github icon"  /> 
       </a>
       </div>
    )

}

export default ProjectBoardIconSvg;






