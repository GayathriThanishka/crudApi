// update.user.service.js
import { pool } from "../sql/connection/sql.connection.js";

const updateUserService = (userid, name, age, callback) => {
  const sql = "UPDATE users SET name = ?, age = ? WHERE userid = ?";
  const values = [name, age, userid];

  pool.query(sql, values, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

export default updateUserService;
