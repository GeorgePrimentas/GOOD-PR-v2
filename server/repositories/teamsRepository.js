import dotenv, { config } from "dotenv";
dotenv.config();
config();
import { dataBase } from "../index.js";
// import { Octokit } from "octokit";

// const octokit = new Octokit({
//   auth: process.env.TOKEN,
// });

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

// FUNCTION TO TRANSFORM REPO LINK URL INTO OWNER AND REPO FOR THE PUT REQUEST FOR PULL REQUESTS

function extractOwnerAndRepoFromUrl(url) {
  // Remove "https://" from the URL and replace with an empty string.
  // All passed URL have to be a string as .replace is a string method.
  const urlWithoutProtocol = url.replace(/^https:\/\//i, "");

  // Split the URL by "/"
  const urlParts = urlWithoutProtocol.split("/");
  // console.log(urlParts);

  // Extract the owner and repo from the URL
  const owner = urlParts[1];
  const repo = urlParts[2];

  return { owner, repo };
}

export async function getAllTeamRepos() {
  try {
    const result = await dataBase.query(
      "SELECT id, repo_link, team_name FROM fp_teams"
    );
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      const teamDataInfo = result.rows.map((eachTeamDataInfo) => {
        const { owner, repo } = extractOwnerAndRepoFromUrl(
          eachTeamDataInfo.repo_link
        );
        return {
          id: eachTeamDataInfo.id,
          teamName: eachTeamDataInfo.team_name,
          owner: owner,
          repo: repo,
        };
      });

      // console.log(teamDataInfo);

      return teamDataInfo;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}

export async function getAllTeamMembersPRs() {
  try {
    const allTeamsRepos = await getAllTeamRepos();
    // console.log(allTeamsRepos);

    const results = [];

    for (const repo of allTeamsRepos) {
      // const ghURL = `https://api.github.com/search/issues?q=is:pr+repo:${repo.owner}/${repo.repo}/+author:${repo.author}`;

      const apiURL = `https://api.github.com/repos/${repo.owner}/${repo.repo}/pulls?state=all`;

      const response = await fetch(apiURL, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });

      const responseData = await response.json();

      const newResponse = responseData.map((eachUser) => eachUser.user.login);

      const pullRequestCount = responseData.length;

      const prCount = async (users) => {
        const count = {};

        for (let eachName of users) {
          count[eachName] = count[eachName] ? count[eachName] + 1 : 1;
        }
        // console.log(count);
        return count;
      };

      const eachPRCount = await prCount(newResponse);

      results.push({
        id: repo.id,
        teamName: repo.teamName,
        owner: repo.owner,
        repo: repo.repo,
        pullRequestCount: pullRequestCount,
        users: eachPRCount,
      });
    }
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getTeamAndMemberInfo(teamID) {
  try {
    const getQuery = "SELECT id, repo_link, team_name FROM fp_teams";
    const idQuery = "WHERE id = $1";

    const result = await dataBase.query(getQuery + " " + idQuery, [teamID]);
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      const teamDataInfo = result.rows.map((eachTeamDataInfo) => {
        const { owner, repo } = extractOwnerAndRepoFromUrl(
          eachTeamDataInfo.repo_link
        );
        return {
          id: eachTeamDataInfo.id,
          teamName: eachTeamDataInfo.team_name,
          owner: owner,
          repo: repo,
        };
      });

      const resultInfo = [];

      for (const repo of teamDataInfo) {
        const apiUrl = `https://api.github.com/repos/${repo.owner}/${repo.repo}/pulls?state=all`;

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        });
        const responseData = await response.json();

        const newResponse = responseData.map((eachUser) => eachUser.user.login);
        console.log(newResponse);
        const pullRequestCount = responseData.length;

        const prCount = async (users) => {
          const count = {};

          for (let eachName of users) {
            count[eachName] = count[eachName] ? count[eachName] + 1 : 1;
          }
          // console.log(count);
          return count;
        };

        const eachPRCount = await prCount(newResponse);

        resultInfo.push({
          id: repo.id,
          teamName: repo.teamName,
          owner: repo.owner,
          repo: repo.repo,
          pullRequestCount: pullRequestCount,
          users: eachPRCount,
        });
      }

      console.log(resultInfo);
      return resultInfo;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}
