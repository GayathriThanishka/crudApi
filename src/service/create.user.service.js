import { pool } from "../sql/connection/sql.connection.js";


const createUserService = (userId, name, age, created_at, callback) => {
  
  const sql = "INSERT INTO users (userid, name, age, created_at) VALUES (?, ?, ?, ?)";
  const values = [userId, name, age, created_at];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error("SQL Error:", err); 
      return callback(err, null);
    }
    return callback(null, result);
  });
};

export default createUserService