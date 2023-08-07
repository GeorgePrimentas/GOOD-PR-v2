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

export async function getAllTeamAndMembersInfo() {
  try {
    const result = await dataBase.query(
      "SELECT * FROM fp_teams fpt INNER JOIN fp_members fpm ON fpt.id = fpm.team_id"
    );
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      return result.rows;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}


 // FUNCTION TO TRANSFORM REPO LINK URL INTO OWNER AND REPO FOR THE PUT REQUEST FOR PULL REQUESTS

function extractOwnerAndRepoFromUrl(url) {
// Remove "https://" from the URL and replace with an empty string.
// All passed URL have to be a string as .replace is a string method.
const urlWithoutProtocol = url.replace(/^https:\/\//i, "");

// Split the URL by "/"
const urlParts = urlWithoutProtocol.split("/");
console.log(urlParts);

// Extract the owner and repo from the URL
const owner = urlParts[1];
const repo = urlParts[2];

return { owner, repo };
}

// (TEAMS REPOSITORY)
export async function getAllTeamRepos() {
  try {
    const result = await dataBase.query("SELECT repo_link FROM fp_teams");
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      const eachTeamsRepoLink = result.rows.map(
        (eachTeamRepo) => eachTeamRepo.repo_link
      );
      
      const ownerRepoInfo = eachTeamsRepoLink.map((repoURL) =>
          extractOwnerAndRepoFromUrl(repoURL)
        );
        console.log(ownerRepoInfo);
 
      return ownerRepoInfo;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}