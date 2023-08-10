const TrafficLights = ({ teams }) => {
  const teamsWithContributions = teams.map((team) => {
  
    const sizeOfTeam = Object.keys(team.users).length;

    const minimumContribution = 100 / (sizeOfTeam + 1);
    const maximumContribution = 100 / (sizeOfTeam - 1);

    return {
      teamData: team,
      minimumContribution,
      maximumContribution,
    };
  });

  return (
    <div>
      {teamsWithContributions.map((teamWithContributions, index) => {
        const { teamData, minimumContribution, maximumContribution } =
          teamWithContributions;
        const totalPullRequests = teamData.pullRequestCount;

        return (
          <div key={index}>
        
            <ul>
              {Object.entries(teamData.users).map(([user, prCount]) => {
                const percentage = (prCount / totalPullRequests) * 100;

                const contribution = percentage.toFixed(2);
                const status =
                  contribution >= minimumContribution &&
                  contribution <= maximumContribution
                    ? contribution + "% OK"
                    : contribution + "% INTERVENE";

                return (
                  <li key={user}>
                    {user}: {prCount} PRs ({status})
                  </li>
                );
              })}
            </ul>
            <p>Minimum Contribution: {minimumContribution.toFixed(2)}%</p>
            <p>Maximum Contribution: {maximumContribution.toFixed(2)}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLights;
