import React, { useEffect, useState } from "react";
import "./TeamCard.css";
import CardInfo from "../CardInfo/CardInfo";
import HundredSquareChart from "../HundredSquareChart/HundredSquareChart";
import { useParams } from "react-router-dom";
import AllIconsContainer from "../Icons/AllIconsContainer";

const TeamCard = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  const [rawData, setRawData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  function getAllTeamData() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/team`)
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    async function fetchRawData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/teamPr`
        );
        const rawData = await response.json();
        setRawData(rawData);
      } catch (error) {
        console.error("Error fetching raw data:", error);
      }
    }

    fetchRawData();
    getAllTeamData();
  }, []);

  const team = rawData.find((team) => team.id === numericId);
  const usersData = team?.users || {};

  const data = [];
  for (const user in usersData) {
    data.push(user, usersData[user]);
  }

  if (!team) {
    return null; // Handle the case where the team is not found
  }

  return (
    <div>
      <div className="card-top">
        <div className="small-team-btn">
          <p>{team ? team.teamName : "Team"}</p>
        </div>
        <HundredSquareChart data={data} />
      </div>
      <CardInfo numericId={numericId} />
      <AllIconsContainer />
      <div class="spacer"></div>
    </div>
  );
};

export default TeamCard;
