import React from "react";
import DeveloperProfile from "../DeveloperProfile/DeveloperProfile";
import "./TeamAlphaDetails.css";

const teamAlphaData = [
  {
    name: "Saghar Hosseinardi",
    role: "Full-Stack Developer",
    githubUsername: "SagharHosseinmardi",
    linkedinUsername: "Saghar Hosseinmardi",
  },
  {
    name: "Andriana Saffo",
    role: "Full-Stack Developer",
    githubUsername: "AndrianaOS",
    linkedinUsername: "Andriana Saffo",
  },
  {
    name: "George Primentas",
    role: "Front-End Developer",
    githubUsername: "GeorgePrimentas",
    linkedinUsername: "George Primentas",
  },
  {
    name: "Gayle Thompson Igwebike",
    role: "Full-Stack Developer",
    githubUsername: "Gayle-Thompson-Igwebike",
    linkedinUsername: "Gayle Thompson-Igwebike",
  },
];

const TeamAlphaDetails = () => {
  return (
    <div className="person-card-container">
      <h1 className="centered-heading">Team Alpha</h1>
      <div className="team-alpha-cards">
        {teamAlphaData.map((person, index) => (
          <DeveloperProfile key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default TeamAlphaDetails;
