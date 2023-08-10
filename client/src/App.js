import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ClickableCards from "./components/ClickableCards/ClickableCards";
import TrafficLights from "./components/TrafficLights/TrafficLights";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [prData, setPrData] = useState([]);
  const [teamStatuses, setTeamStatuses] = useState([]); // Define the teamStatuses state

  async function fetchPrsData() {
    try {
      const response = await fetch("http://localhost:8000/api/members");
      const data = await response.json();
      setPrData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
    fetchPrsData();
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="team-buttons">
        {teamData.length > 0 &&
          teamData.map((eachTeam) => (
            <ClickableCards
              key={eachTeam.id}
              teamName={eachTeam.team_name}
              teamId={eachTeam.id}
              teamStatuses={teamStatuses} // Pass teamStatuses to ClickableCards
            />
          ))}
      </section>
      <TrafficLights teams={prData} setTeamStatuses={setTeamStatuses} />{" "}
      {/* Pass setTeamStatuses to TrafficLights */}
      <Form />
    </div>
  );
}

export default App;
