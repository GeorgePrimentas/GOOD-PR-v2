// import "./Home.css";
import React, { useState, useEffect } from "react";
import FormLink from "../FormLink/FormLink"
import ClickableCards from "../ClickableCards/ClickableCards";
import Search from "../Search/Search";
import TrafficLights from "../TrafficLights/TrafficLights";
import { Link, useNavigate } from "react-router-dom";
import HundredSquareChart from "../HundredSquareChart/HundredSquareChart";
function Home() {
  const [teamAndMemberData, setTeamAndMemberData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [teamStatuses, setTeamStatuses] = useState([]); // Define the teamStatuses state
  const navigate = useNavigate();

  // const data = ["Meysam-Arshadi", 9, "SanaAsaf", 8, "OlushoreOdude", 8, "ali1373107", 5]
// const rawData = [{
//   "id": 31,
//   "teamName": "NYF",
//   "owner": "OlushoreOdude",
//   "repo": "nyf-job-board",
//   "pullRequestCount": 30,
//   "users": {
//     "Meysam-Arshadi": 9,
//     "SanaAsaf": 8,
//     "OlushoreOdude": 8,
//     "ali1373107": 5
//   }

  const rawData = [{
  "id": 31,
  "teamName": "NYF",
  "owner": "OlushoreOdude",
  "repo": "nyf-job-board",
  "pullRequestCount": 30,
  "users": {
    "Meysam-Arshadi": 9,
    "SanaAsaf": 8,
    "OlushoreOdude": 8,
    "ali1373107": 5
  }

}];

const data = [];
const users = rawData[0].users;
for (const user in users) {
  data.push(user, users[user]);
}

  const handleClick = (id) => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0);
    // Navigate to the specified route using the `navigate` function
    navigate(`/${id}`);
  };

  async function getAllTeamsAndMembersData() {
    try {
      const response = await fetch(
        // `${process.env.REACT_APP_BACKEND_URL}/teamPr`
       `http://localhost:8000/teamPr`
      ); //Change to render site before merging
      const data = await response.json();
      setTeamAndMemberData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function getAllTeamData() {
    // fetch(`${process.env.REACT_APP_BACKEND_URL}/team`)
        fetch(`http://localhost:8000/team`)
      .then((response) => response.json())
      .then((data) => {
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
      <section className="team-buttons">
        

        {teamData.length > 0 &&
          teamData.map((eachTeam) => (
            <Link
              to={`/${eachTeam.id}`}
              key={eachTeam.id}
              onClick={() => handleClick(eachTeam.id)}
            >
              <ClickableCards
                teamName={eachTeam.team_name}
                teamId={eachTeam.id}
                teamStatuses={teamStatuses} // Pass teamStatuses to ClickableCards
              />

            </Link>
          ))}
      </section>
      <TrafficLights
        teams={teamAndMemberData}
        setTeamStatuses={setTeamStatuses}
      />{" "}
     
      <FormLink />
      <HundredSquareChart data={data}/>
      <Search />
    </div>
  );
}

export default Home;