import SlackIcon from "../../images/Slack-mark.svg";




const SlackIconSvg = () => {
    return (
       < a 
       className="slack-icon" 
        href="https://codeyourfuture.slack.com/archives/C057SMMPG8Y">
       <img src={SlackIcon} alt="slack icon"/> <style> height: 200px</style>
       </a>
    )

}

export default SlackIconSvg;