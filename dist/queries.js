const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432,
});
const getUsers = (request, response) => {
    pool.query('SELECT * FROM person ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
        // console.log(results.rows)
    });
};
module.exports = { getUsers };
//# sourceMappingURL=queries.js.map