import React from 'react';
import './All-IconsContainer.css';
import SlackIconSvg from './SlackIconSvg';
import GitHubIconSvg from './GitHubIconSvg'; 
import GoogleDocsLogoSvg from './GoogleDocsLogoSvg';
import DeployedAppIconSvg from '../Icons/DeployedAppIcon';
import ProjectBoardIconSvg from './Icons/ProjectBoardIcon';

const AllIconsContainer = () => {
    return (
        <div className="icons-container">
            <SlackIconSvg />
            <GitHubIconSvg /> 
            <GoogleDocsLogoSvg />
            <DeployedAppIconSvg />  
            <ProjectBoardIconSvg />
        </div>
    );
}

export default AllIconsContainer;
