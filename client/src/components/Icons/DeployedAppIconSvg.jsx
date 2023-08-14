import DeployedAppIcon from "../../images/DeployedSite.svg";




const DeployedAppIconSvg = () => {
    return (
       < a 
       className="deployed-site-icon" 
        href="https://good-pr-v1-server.onrender.com">
       <img src={DeployedAppIcon} alt="desktop icon"  /> 
       </a>
    )

}

export default DeployedAppIconSvg;