import { getAllTeamNames } from "../repositories/teamsRepository.js";

export async function getTeamData(req, res) {
  try {
    const allTeamNames = await getAllTeamNames();
    console.log(allTeamNames);
    return res.status(200).json(allTeamNames);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
