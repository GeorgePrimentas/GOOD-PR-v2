import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ClickableCards from "./components/ClickableCards/ClickableCards";
// import GoogleDocsLogosvg from "./components/Icons/GoogleDocIcon";
// import GitHubIconSvg from "./components/Icons/GitHubIcon";
// import getAllTeamData from "./utilities/getAllTeamData";
// import FormLink from "./components/FormLink/FormLink";

import CardInfo from "./components/CardInfo/CardInfo";


function App() {
  const [teamAndMemberData, setTeamAndMemberData] = useState([]);

  function getAllTeamsAndMembersData() {
    fetch("https://good-pr-v1-server.onrender.com/api/members")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeamAndMemberData(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllTeamsAndMembersData();
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

      {teamAndMemberData.length > 0 &&
        teamAndMemberData.map((eachInfo) => (
          <CardInfo
            key={eachInfo.id}
            pr={eachInfo.pullRequestCount}
            allUsers={eachInfo.users}
          />
        ))}

      <Form />

    </div>
  );
}

export default App;
