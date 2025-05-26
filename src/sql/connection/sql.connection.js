import mysql from "mysql2";
import { sqlConfig } from "../config/config.js";
import dotenv from "dotenv";

dotenv.config()

const pool = mysql.createPool({
  host: sqlConfig.host,
  user: sqlConfig.user,
  password: sqlConfig.password,
  database: sqlConfig.database,
  port: sqlConfig.port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});




 const sqlConnection = () => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.error(" MySQL connection failed:", err.message);
      return;
    }
    console.log(" Connected to MySQL Docker DB");
    conn.release();
  });
};

export { pool , sqlConnection };     








  
