import express from "express";
import cors from "cors";
import { config } from "dotenv";
import pkg from "pg";

config();
const app = express();
app.use(cors());
app.use(express.json());

// Function to generate a unique team_id as an integer within a range
function generateTeamId() {
  return Math.floor(Math.random() * 9900000) + 100000; // Generate a random integer between 100000 and 9999999
}

async function startServer() {
  const { Pool } = pkg;
  const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
  });

  app.get("/", (req, res) => {
    res.send("Server is running");
  });

  const dataBase = await pool.connect();
  console.log(dataBase);

  app.post("/submit-form", async (req, res) => {
    const { teamName, role, githubUsername } = req.body;

    try {
      // Generate a unique team_id
      const teamId = generateTeamId();

      const query =
        "INSERT INTO fp_members (team_id, member_name, role, github_username) VALUES ($1, $2, $3, $4) RETURNING id";

      const result = await pool.query(query, [
        teamId,
        teamName,
        role,
        githubUsername,
      ]);

      const insertedId = result.rows[0].id;

      res
        .status(200)
        .json({ message: "Form submitted successfully!", id: insertedId });
    } catch (error) {
      console.error({ message: "Error submitting form", error });
      res.status(500).json({
        message: "An error occurred while processing the form.",
        error: error.message,
      });
    }
  });

  app.listen(8000, () => {
    console.log("Server started on port 8000 on server");
  });
}

startServer();
