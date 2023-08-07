import { Router } from "express";
import axios from "axios";
const router = Router();
import { getAllTeamRepos } from "./repositories/teamsRepository.js"

// (git api request format)
// https://api.github.com/repos/Gayle-Thompson-Igwebike/Affirmation-page/pulls?state=all

//example using our goodpR-V1- repo below:

export const getAllTeamMembersPRs = router.get("/", async (req, res) => {
    const allTeamsRepos = await getAllTeamRepos();
  console.log(allTeamsRepos);
 

   
  const repoOwner = "Gayle-Thompson-Igwebike";
  const repoName = "GOOD-PR-v1";
  const PullRequestsApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/pulls?state=all`;

  axios
    .get(PullRequestsApiUrl)
    .then((response) => {
      console.log(response);
      const pullRequests = response.data.items;
      const pullRequestCount = pullRequests.length;

      console.log(
        `Total Number of pull request contributions by in this repo is: ${pullRequestCount}`
      );

      res.status(200).json({ pullRequestCount });
    })
    .catch((error) => {
      console.error("Error fetching pull requests:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});
export default getAllTeamMembersPRs;
