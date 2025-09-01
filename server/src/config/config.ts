// Todo update the .env
import knex from "knex";

import dotenv from 'dotenv';
dotenv.config();

export const db = knex({
    client: 'pg',
    connection: process.env.PGDATABASE,
    pool: { min: 0, max: 10 },
});
