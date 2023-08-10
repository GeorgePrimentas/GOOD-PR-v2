import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ClickableCards from "./components/ClickableCards/ClickableCards";
import CardInfo from "./components/CardInfo/CardInfo";
import TrafficLights from "./components/TrafficLights/TrafficLights";
// Import other necessary components

function App() {
  const [teamAndMemberData, setTeamAndMemberData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [prData, setPrData] = useState([]);
  const [teamStatuses, setTeamStatuses] = useState([]);

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
        setTeamAndMemberData(data);
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
        {teamAndMemberData.length > 0 &&
          teamAndMemberData.map((eachTeam) => (
            <ClickableCards key={eachTeam.id} teamName={eachTeam.teamName} />
          ))}
      </section>
      <section>
        {teamAndMemberData.length > 0 &&
          teamAndMemberData.map((eachInfo) => (
            <CardInfo
              key={eachInfo.id}
              pr={eachInfo.pullRequestCount}
              allUsers={eachInfo.users}
            />
          ))}

        {teamData.length > 0 &&
          teamData.map((eachTeam) => (
            <ClickableCards
              key={eachTeam.id}
              teamName={eachTeam.team_name}
              teamId={eachTeam.id}
              teamStatuses={teamStatuses}
            />
          ))}
      </section>
      {/* Render TrafficLights component with correct props */}
      <TrafficLights teams={prData} setTeamStatuses={setTeamStatuses} />

      <Form />
    </div>
  );
}

export default App;
