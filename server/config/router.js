import { Router } from "express";
const router = Router();
import { getTeamData } from "../controllers/teamsController.js";

router.route("/team").get(getTeamData);

export default router;
