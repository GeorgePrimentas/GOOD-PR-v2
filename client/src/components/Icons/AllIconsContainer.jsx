
import React from 'react';
import './AllIconsContainer.css';
import DeployedAppIconSvg from './DeployedAppIconSvg';
import SlackIconSvg from './SlackIconSvg';
import GitHubIconSvg from './GitHubIconSvg';
import GoogleDocsLogosvg from './GoogleDocIconSvg';



const AllIconsContainer = () => {
return (

<div className="icons-container">

    <GitHubIconSvg />
    <GoogleDocsLogosvg />
    <SlackIconSvg />
    <DeployedAppIconSvg/>
   
 
</div>

);
}

export default AllIconsContainer;
