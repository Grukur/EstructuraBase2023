import { Sequelize } from "sequelize";
import 'dotenv/config.js';

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password,{
    host:host,
    dialect:'postgres'
});

export default sequelize;