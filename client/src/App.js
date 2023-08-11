import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ClickableCards from "./components/ClickableCards/ClickableCards";
// import GoogleDocsLogosvg from "./components/Icons/GoogleDocIcon";
// import GitHubIconSvg from "./components/Icons/GitHubIcon";
// import getAllTeamData from "./utilities/getAllTeamData";
// import FormLink from "./components/FormLink/FormLink";

import CardInfo from "./components/CardInfo/CardInfo";
import TrafficLights from "./components/TrafficLights/TrafficLights";



    function App() {
  const [teamAndMemberData, setTeamAndMemberData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [teamStatuses, setTeamStatuses] = useState([]); // Define the teamStatuses state

  async function getAllTeamsAndMembersData() {
    try {
      const response = await fetch("http://localhost:8000/api/members");
      const data = await response.json();
      setTeamAndMemberData(data);
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
    getAllTeamsAndMembersData();
    getAllTeamData();
   
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="team-buttons">
        {/* {teamAndMemberData.length > 0 &&
          teamAndMemberData.map((eachInfo) => (
            <CardInfo
              key={eachInfo.id}
              pr={eachInfo.pullRequestCount}
              allUsers={eachInfo.users}
            />
          ))} */}

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
      <TrafficLights
        teams={teamAndMemberData}
        setTeamStatuses={setTeamStatuses}
      />{" "}
      {/* Pass setTeamStatuses to TrafficLights */}
      <Form />
    </div>
  );
}

export default App;
