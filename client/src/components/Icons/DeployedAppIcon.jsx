import DeployedAppIcon from "../../images/DeployedSite.svg";
import './DeployedAppIconSvg.css';




const DeployedAppIconSvg = () => {
    return (
        <div className="icons-container">
       < a 
       className="deployed-site-icon" 
        href="https://github.com/Gayle-Thompson-Igwebike/GOOD-PR-v1">
       <img src={DeployedAppIcon} alt="desktop icon" /> 
       </a>
       </div>
    )

}

export default DeployedAppIconSvg;

