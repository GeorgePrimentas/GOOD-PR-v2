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

// GETS SPECIFIC INFORMATION FROM BOTH fp_teams and fp_members TABLES AND JOINING THEM BY THEIR CORRESPONDING FOREIGN AND PRIMARY KEYS
export async function getAllTeamRepos() {
  try {
    const result = await dataBase.query(
      "SELECT fpt.id, fpt.repo_link, fpt.team_name, fpm.github_username FROM fp_teams fpt INNER JOIN fp_members fpm ON fpt.id = fpm.team_id"
    );
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      const teamDataInfo = [];

      result.rows.forEach((eachTeamDataInfo) => {
        const { owner, repo } = extractOwnerAndRepoFromUrl(
          eachTeamDataInfo.repo_link
        );

        const existingTeam = teamDataInfo.find(
          (team) => team.id === eachTeamDataInfo.id
        );

        if (existingTeam) {
          existingTeam.authors.push(eachTeamDataInfo.github_username);
        } else {
          teamDataInfo.push({
            id: eachTeamDataInfo.id,
            teamName: eachTeamDataInfo.team_name,
            owner: owner,
            repository: repo,
            authors: [eachTeamDataInfo.github_username],
          });
        }
      });

      // console.log(teamDataInfo);

      return teamDataInfo;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}

// USES THE INFORMATION OBTAINED FROM THE getAllTeamRepos FUNCTION TO CREATE AN ARRAY OF OBJECTS FOR EACH TEAM
// THIS INCLUDES THE NUMBER OF PULL REQUESTS DONE BY EACH MEMBER OF THE TEAM BASED ON THEIR GITHUB USERNAME
export async function getAllTeamMembersPRs() {
  try {
    const allTeamsRepos = await getAllTeamRepos();

    const results = [];

    for (const repo of allTeamsRepos) {
      const startingTeamInfo = {
        id: repo.id,
        teamName: repo.teamName,
        owner: repo.owner,
        repo: repo.repository,
        pullRequestCount: 0,
        users: {},
      };

      for (const author of repo.authors) {
        const ghURL = `https://api.github.com/search/issues?q=is:pr+repo:${repo.owner}/${repo.repository}+author:${author}`;

        const response = await fetch(ghURL, {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        });
        const responseData = await response.json();

        const newResponse = responseData.items.map(
          (eachUser) => eachUser.user.login
        );

        const pullRequestCount = responseData.items.length;

        const prCount = async (users) => {
          const count = {};

          for (let eachName of users) {
            count[eachName] = count[eachName] ? count[eachName] + 1 : 1;
          }
          return count;
        };

        const eachPRCount = await prCount(newResponse);

        startingTeamInfo.pullRequestCount =
          startingTeamInfo.pullRequestCount + pullRequestCount;

        for (const user in eachPRCount) {
          if (startingTeamInfo.users[user]) {
            startingTeamInfo.users[user] += eachPRCount[user];
          } else {
            startingTeamInfo.users[user] = eachPRCount[user];
          }
        }
      }

      results.push(startingTeamInfo);
    }

    return results;
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    throw error;
  }
}

// FINDS A SPECIFIC TEAM INFORMATION DEPENDING ON THE ID
export async function getTeamAndMemberInfo(teamID) {
  try {
    const getQuery =
      "SELECT fpt.id, fpt.repo_link, fpt.team_name, fpm.github_username FROM fp_teams fpt INNER JOIN fp_members fpm ON fpt.id = fpm.team_id";
    const idQuery = "WHERE fpt.id = $1";

    const result = await dataBase.query(getQuery + " " + idQuery, [teamID]);
    if (result.rowCount === 0) {
      console.log("No teams available");
    } else {
      const teamDataInfo = [];

      result.rows.map((eachTeamDataInfo) => {
        const { owner, repo } = extractOwnerAndRepoFromUrl(
          eachTeamDataInfo.repo_link
        );

        const existingTeam = teamDataInfo.find(
          (team) => team.id === eachTeamDataInfo.id
        );

        if (existingTeam) {
          existingTeam.authors.push(eachTeamDataInfo.github_username);
        } else {
          teamDataInfo.push({
            id: eachTeamDataInfo.id,
            teamName: eachTeamDataInfo.team_name,
            owner: owner,
            repository: repo,
            authors: [eachTeamDataInfo.github_username],
          });
        }
      });

      const resultInfo = [];

      for (const repo of teamDataInfo) {
        const startingTeamInfo = {
          id: repo.id,
          teamName: repo.teamName,
          owner: repo.owner,
          repo: repo.repository,
          pullRequestCount: 0,
          users: {},
        };

        for (const author of repo.authors) {
          const ghURL = `https://api.github.com/search/issues?q=is:pr+repo:${repo.owner}/${repo.repository}+author:${author}`;

          const response = await fetch(ghURL, {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN}`,
            },
          });
          const responseData = await response.json();

          const newResponse = responseData.items.map(
            (eachUser) => eachUser.user.login
          );

          const pullRequestCount = responseData.items.length;

          const prCount = async (users) => {
            const count = {};

            for (let eachName of users) {
              count[eachName] = count[eachName] ? count[eachName] + 1 : 1;
            }
            return count;
          };

          const eachPRCount = await prCount(newResponse);

          startingTeamInfo.pullRequestCount =
            startingTeamInfo.pullRequestCount + pullRequestCount;

          for (const user in eachPRCount) {
            if (startingTeamInfo.users[user]) {
              startingTeamInfo.users[user] += eachPRCount[user];
            } else {
              startingTeamInfo.users[user] = eachPRCount[user];
            }
          }
        }

        resultInfo.push(startingTeamInfo);
      }

      return resultInfo;
    }
  } catch (error) {
    console.error("Team info:", error);
  }
}
