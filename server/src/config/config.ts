// Todo update the .env
import knex from "knex";

import dotenv from 'dotenv';
dotenv.config();

const {PGUSER, PGPASSWORD, PGHOST, PGDATABASE} = process.env;
let Port = 5432;

export const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
        port: Port
    }
});
