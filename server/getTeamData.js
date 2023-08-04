import { Router } from "express";
const router = Router();
import { dataBase } from "./DBConfig.js";

export const getTeamDataRouter = router.get("/", (req, res) => {
  const getQuery = "SELECT * FROM fp_teams";
  dataBase
    .query(getQuery)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(400).json({ error: "No teams found" });
      } else {
        console.log(result.rows);
        return res.status(200).json(result.rows);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});
