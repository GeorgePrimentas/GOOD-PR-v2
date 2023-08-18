import React, { useRef, useEffect, useState } from 'react';
import './TeamCard.css';
import CardInfo from '../CardInfo/CardInfo';
// import ClickableCards from '../ClickableCards/ClickableCards';
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
          `http://localhost:8000/teamPr`
        );
        const rawData = await response.json();
        setRawData(rawData);
      } catch (error) {
        console.error("Error fetching raw data:", error);
      }
    }

    fetchRawData();
  }, []);

  // // For the Clickable card
  // const teamIndex = rawData.findIndex(team => team.id === numericId);

  const usersData = rawData.find(team => team.id === numericId)?.users || {};

  const data = [];
  for (const user in usersData) {
    data.push(user, usersData[user]);
  }

  return (
    <div>
      <div className="card-top">
        {/* <ClickableCards id={teamIndex} /> */}
        <div className = "small-team-btn"><p>Team</p></div>
        <HundredSquareChart data={ data } />
      </div>
      <CardInfo numericId={numericId} />
      <AllIconsContainer />
    </div>
  );
}

export default TeamCard;