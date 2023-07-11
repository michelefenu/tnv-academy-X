import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "the-net-pizza",
  username: "root",
  password: "root",
  host: "localhost",
  port: 8889,
  dialect: "mysql",
});

export default db;