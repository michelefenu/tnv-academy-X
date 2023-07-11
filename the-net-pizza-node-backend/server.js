import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import db from './config/database.js'

const PORT = 1234;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//app.use(express.static('public_html'));

try {
  db.authenticate();
  console.log("Database connection has been established successfully");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}

// Use { alter: true } to enable schema update
db.sync();
