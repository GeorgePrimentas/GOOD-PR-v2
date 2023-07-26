import express from "express";
import pkg from "pg";

const { Pool, PoolClient } = pkg;

const dataBaseURL =
  "postgres://teamalpha:HipjlSkoPTSL0C3es148z9LTtvylVrve@dpg-cj0h01j438irjjd02pk0-a.frankfurt-postgres.render.com/goodpr";
const app = express();

  async function startserver(){
    const pool = new Pool({ ssl: true,
      connectionString: dataBaseURL,
    });
    const dataBase = await pool.connect();
    console.log(dataBase);
    
    app.listen(8000, () => {
      console.log("Server started on port 8000");
    });
  
  }
  
  startserver();   
  