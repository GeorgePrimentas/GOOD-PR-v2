import "../CardInfo/CardInfo.css";

const CardInfo = () => {
  return (
    <div>
      <h3>Team members</h3>
      <aside>
        <table>
          <tr>
            <th>Members</th>
            <th>Percentage</th>
            <th>PRs</th>
            <th>Difference</th>
          </tr>
          <tr>
            <td className="name-column">
              <div className="color-square"></div>Person 1
            </td>
            <td>30%</td>
            <td>18</td>
            <td>0</td>
          </tr>
        </table>
      </aside>
    </div>
  );
};

export default CardInfo;
