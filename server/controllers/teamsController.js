import { getAllTeamInfo } from "../repositories/teamsRepository.js";
import { getAllTeamAndMembersInfo } from "../repositories/teamsRepository.js";
import { getAllTeamRepos } from "../repositories/teamsRepository.js";



export async function getTeamData(req, res) {
  try {
    const allTeamNames = await getAllTeamInfo();
    return res.status(200).json(allTeamNames);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function getTeamAndMemberData(req, res) {
  try {
    const allTeamAndMemberData = await getAllTeamAndMembersInfo();
    return res.status(200).json(allTeamAndMemberData);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// (TEAMS CONTROLLER)
    export async function allTeamRepos(req, res) {
try {
const teamRepos = await getAllTeamRepos();
return res.status(200).json(teamRepos);
} catch (error) {
console.error("Error fetching team data:", error);
return res.status(500).json({ error: "Internal server error" });
}
}