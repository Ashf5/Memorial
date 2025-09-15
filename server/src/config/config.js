"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Todo update the .env
var knex_1 = require("knex");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.db = (0, knex_1.default)({
    client: 'pg',
    connection: process.env.PGDATABASE,
    pool: { min: 0, max: 10 },
});
