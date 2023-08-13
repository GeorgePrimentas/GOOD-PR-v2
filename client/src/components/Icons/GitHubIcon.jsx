import React from "react";
import GitHubIcon from "../../images/github-mark.svg";
import "./GitHubIcon.css"


const GitHubIconSvg = () => {

    return (
        <div className="icons-container">
       < a 
       className="githubrepo-icon" 
        href="https://github.com/Gayle-Thompson-Igwebike/GOOD-PR-v1">
       <img src={GitHubIcon} alt="github icon"  /> 
       </a>
       </div>
    )

}

export default GitHubIconSvg;









