import "../CardInfo/CardInfo.css";

const CardInfo = ({ pr, allUsers }) => {
  // console.log(allUsers);
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
        {Object.entries(allUsers).map(([username, prCount]) => (
          <tr key={username}>
            <td className="name-column">
              <div className="color-square"></div>
              {username}
            </td>
            <td>{prCount}</td>
            <td>{((prCount / pr) * 100).toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardInfo;
