import "../ClickableCards/ClickableCards.css";

const ClickableCards = ({ teamName }) => {
  return (
    <main>
      <div className="team-box">{teamName}</div>
    </main>
  );
};

export default ClickableCards;
