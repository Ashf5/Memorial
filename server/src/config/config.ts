
import knex from "knex";

import dotenv from 'dotenv';
dotenv.config();

const {USER, PASSWORD, DB_PORT, HOST} = process.env;
let ConvertedPort = Number(DB_PORT) || 5432;

export const db = knex({
    client: 'pg',
    connection: {
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: 'Memorial',
        port: ConvertedPort
    }
});
