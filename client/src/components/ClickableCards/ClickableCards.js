import "../ClickableCards/ClickableCards.css";

const ClickableCards = ({ teamName }) => {
  // The following if statement will 'slice' the name of the 
  // Team and keep only the first 20 characters (if it's longer).
  // It will also add an ellipsis ("...") to convey that the name
  // displayed has been sliced.
  if (teamName.length > 20) {
    teamName = teamName.substring(0, 20) + "...";
  }
  return (
    <main>
      <div className="team-box">{teamName}</div>
    </main>
  );
};

export default ClickableCards;
