import { getAllTeamInfo } from "../repositories/teamsRepository.js";

export async function getTeamData(req, res) {
  try {
    const allTeamNames = await getAllTeamInfo();
    return res.status(200).json(allTeamNames);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
