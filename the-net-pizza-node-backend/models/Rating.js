import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('rating', {
  filmId: {
    type: DataTypes.INTEGER
  },
  rating: {
    type:  DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
});
 
export default Rating;