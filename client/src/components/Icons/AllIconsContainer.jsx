
import React from 'react';
import './AllIconsContainer.css';
import DeployedAppIconSvg from './DeployedAppIconSvg';
import SlackIconSvg from './SlackIconSvg';
import GitHubIconSvg from './GitHubIconSvg';
import GoogleDocsLogosvg from './GoogleDocIconSvg';
import ProjectBoardIconSvg from './ProjectBoardIconSvg';



const AllIconsContainer = () => {
return (

<div className="icons-container">

    <GitHubIconSvg />
    <GoogleDocsLogosvg />
    <SlackIconSvg />
    <DeployedAppIconSvg/>
    <ProjectBoardIconSvg/>
 
</div>

);
}

export default AllIconsContainer;
