import  { useEffect } from "react";

const TrafficLights = ({ teams, setTeamStatuses }) => {
  useEffect(() => {
    console.log("Teams received:", teams); // Log the received teams prop

    const calculatedStatuses = teams.map((team) => {
      console.log("Calculating for team:", team.id); // Log the current team being processed

      const totalPullRequests = team.pullRequestCount;
      const sizeOfTeam = Object.keys(team.users).length;

      const minimumContribution = 100 / (sizeOfTeam + 1);
      const maximumContribution = 100 / (sizeOfTeam - 1);
      const minimumAmberContribution = 100 / (sizeOfTeam + 1 - 0.5);
      const maximumAmberContribution = 100 / (sizeOfTeam - 1 + 0.5);

      const usersWithStatus = Object.entries(team.users).map(
        ([user, prCount]) => {
          const percentage = (prCount / totalPullRequests) * 100;
          const contribution = percentage.toFixed(2);
          const status =
            contribution >= minimumContribution &&
            contribution <= maximumContribution
              ? "OK"
              : "INTERVENE";

          return {
            user,
            prCount,
            contribution: contribution + "%",
            status,
          };
        }
      );

      const anyIntervene = usersWithStatus.some(
        (user) => user.status === "INTERVENE"
      );
      const allOk = !usersWithStatus.some(
        (user) => user.status === "INTERVENE"
      );

      console.log("Users with Status:", usersWithStatus); // Log the calculated usersWithStatus array

      return {
        teamId: team.id,
        anyIntervene,
        allOk,
      };
    });

    console.log("Calculated Statuses:", calculatedStatuses); // Log the calculated statuses array

    // Update the teamStatuses state using setTeamStatuses function
    setTeamStatuses(calculatedStatuses);

    console.log("Updated teamStatuses:", calculatedStatuses); // Log the updated teamStatuses state
  }, [teams, setTeamStatuses]);

  return null; // This component doesn't render anything
};

export default TrafficLights;
