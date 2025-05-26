import { CronJob } from 'cron';
import { pool } from '../sql/connection/sql.connection.js'; 

const job = new CronJob(
    '*/2 * * * *', 
    () => {
        const sql = `
           DELETE FROM users WHERE created_at < NOW() - INTERVAL 3 MINUTE;

        `;

        pool.query(sql, (err, results) => {
            if (err) {
                console.error('Error deleting users:', err);
                return;
            }
            console.log('userDeleted ',results.affectedRows);
        });
    },
  
    true, 
    
);

export default job;
