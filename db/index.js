const { Pool } = require('pg');
require("dotenv").config();

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

const proConfig = process.env.DATABASE_URL //heroku addons

const pool = new Pool({
//   connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig,
connectionString: proConfig,
  ssl: {
    rejectUnauthorized: false
  },
});


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}