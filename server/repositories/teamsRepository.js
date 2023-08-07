import { dataBase } from "../index.js";

export async function getAllTeamInfo() {
  try {
    const result = await dataBase.query("SELECT * FROM fp_teams");

    if (result.rowCount === 0) {
      console.log("No teams available");
      throw new Error("No teams available");
    } else {
      return result.rows;
    }
  } catch (error) {
    console.error("Fetching teams:", error);
    return null;
  }
}

export async function getAllTeamAndMembersInfo(searchTerm) {
  try {
    const getQuery =
      "SELECT * FROM fp_teams fpt INNER JOIN fp_members fpm ON fpt.id = fpm.team_id";

    const searchQuery =
      "WHERE lower(team_name) LIKE '%' || $1 || '%' OR lower(member_name) LIKE '%' || $1 || '%'";

    const result = await dataBase.query(getQuery + " " + searchQuery, [
      searchTerm,
    ]);
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      return result.rows;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}
