import { dataBase } from "../index.js";

export async function getAllTeamNames() {
  try {
    const result = await dataBase.query("SELECT team_name FROM fp_teams");

    if (result.rowCount === 0) {
      console.log("No teams available");
      throw new Error("No teams available");
    } else {
      return result.rows.map((eachTeamName) => {
        return eachTeamName.team_name;
      });
    }
  } catch (error) {
    console.error("Fetching teams:", error);
    return null;
  }
}
