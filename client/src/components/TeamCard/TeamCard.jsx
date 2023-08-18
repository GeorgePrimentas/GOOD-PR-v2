import React, { useEffect, useState } from 'react';
import './TeamCard.css';
import CardInfo from '../CardInfo/CardInfo';
import HundredSquareChart from '../HundredSquareChart/HundredSquareChart';
import { useParams } from 'react-router-dom';
import AllIconsContainer from '../Icons/AllIconsContainer';

const TeamCard = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

const [rawData, setRawData] = useState([]);

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
  }, []);

  const team = rawData.find((team) => team.id === numericId);
  const usersData = team?.users || {};

  const data = [];
  for (const user in usersData) {
    data.push(user, usersData[user]);
  }

  return (
    <div>
      <div className="card-top">
        <div className="small-team-btn">
          <p>{team ? team.teamName : "Team"}</p>
        </div>
        <HundredSquareChart data={ data } />
      </div>
      <CardInfo numericId={numericId} />
      <AllIconsContainer />
      <div class="spacer"></div>
    </div>
  );
}

export default TeamCard;