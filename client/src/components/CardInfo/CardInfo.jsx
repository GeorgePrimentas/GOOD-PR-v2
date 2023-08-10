import "../CardInfo/CardInfo.css";

const CardInfo = ({ pr, allUsers }) => {
  // console.log(allUsers);
  return (
    <table id="team-info">
      <thead>
        <tr>
          <th>Team Members</th>
          <th>Pull Requests</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(allUsers).map(([username, prCount]) => (
          <tr key={username}>
            <td>{username}</td>
            <td>{prCount}</td>
            <td>{((prCount / pr) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardInfo;
