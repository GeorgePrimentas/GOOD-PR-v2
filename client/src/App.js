import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ClickableCards from "./components/ClickableCards/ClickableCards";
// import getAllTeamData from "./utilities/getAllTeamData";

function App() {
  const [teamData, setTeamData] = useState([]);

  function getAllTeamData() {
    fetch("https://good-pr-v1-server.onrender.com/team")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeamData(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllTeamData();
  }, []);
  return (
    <div className="App">
      <Header />
      <section className="team-buttons">
        {teamData.length > 0 &&
          teamData.map((eachTeam) => (
            <ClickableCards key={eachTeam.id} teamName={eachTeam.team_name} />
          ))}
      </section>

      <Form />
    </div>
  );
}

export default App;
