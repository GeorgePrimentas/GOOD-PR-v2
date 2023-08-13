import { Router } from "express";
const router = Router();
import { getTeamData } from "../controllers/teamsController.js";
import { getTeamAndMemberData } from "../controllers/teamsController.js";
import { allTeamMembersPRs } from "../controllers/teamsController.js";
import { teamAndMemberInfo } from "../controllers/teamsController.js";

router.route("/team").get(getTeamData);

router.route("/team-members").get(getTeamAndMemberData);

router.route("/teamPr").get(allTeamMembersPRs);

router.route("/teamInfo/:id").get(teamAndMemberInfo);

export default router;
