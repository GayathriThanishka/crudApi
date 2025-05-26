import { pool } from "../sql/connection/sql.connection.js";

const deleteUserService = (userId, callback) => {
  const sql = "DELETE FROM users WHERE userid = ?";
  const values = [userId];

  pool.query(sql, values, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

export default deleteUserService;
