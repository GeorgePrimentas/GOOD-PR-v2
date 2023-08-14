import React, { useState, useEffect } from "react";
import "../CardInfo/CardInfo.css";
import { useParams } from "react-router-dom";

const CardInfo = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [pr, setPr] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/teamPr");
        const data = await response.json();

        const selectedTeam = data.find((team) => team.id === numericId);

        if (selectedTeam) {
          // Convert the users object into an array
          const usersArray = Object.entries(selectedTeam.users).map(
            ([username, prCount]) => ({
              username,
              prCount,
            })
          );

          setAllUsers(usersArray);
          setPr(selectedTeam.pullRequestCount);
        }


        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [numericId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table id="team-info">
      <thead>
        <tr>
          <th>Team Members</th>
          <th>Pull Requests</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map(({ username, prCount }) => (
          <tr key={username}>
            <td className="name-column">
              <div className="color-square"></div>
              {username}
            </td>
            <td>{prCount}</td>
            <td>{pr !== 0 ? ((prCount / pr) * 100).toFixed(1) : 0}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardInfo;
