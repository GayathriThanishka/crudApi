
import { pool } from "../sql/connection/sql.connection.js";

const UserListService = (callback) => {
  pool.query("SELECT * FROM users", (err, results) => {  
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
 
    
  });
};

export default UserListService;
