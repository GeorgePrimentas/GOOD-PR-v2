import React from "react";
import DeveloperProfile from "../DeveloperProfile/DeveloperProfile";
import "./TeamAlphaDetails.css";

const teamAlphaData = [
  {
    name: "Saghar Hosseinardi",
    role: "Full-Stack Developer",
    githubUsername: "SagharHosseinmardi",
    linkedinUsername: "saghar-hosseinmardi-5b0919244",
  },
  {
    name: "Andriana Saffo",
    role: "Full-Stack Developer",
    githubUsername: "AndrianaOS",
    linkedinUsername: "andriana-saffo",
  },
  {
    name: "George Primentas",
    role: "Front-End Developer",
    githubUsername: "GeorgePrimentas",
    linkedinUsername: "georgeprimentas",
  },
  {
    name: "Gayle Thompson Igwebike",
    role: "Full-Stack Developer",
    githubUsername: "Gayle-Thompson-Igwebike",
    linkedinUsername: "gayle-thompson-igwebike-624004228",
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
      <p className="white-text">-</p>
      {/* <p className="white-text">-</p> */}
      
    </div>
  );
};

export default TeamAlphaDetails;
