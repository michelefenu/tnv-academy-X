import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;

const Piatto = db.define('piatti', {
  category: {
    type: DataTypes.STRING
  },
  title: {
    type:  DataTypes.STRING
  },
  description: {
    type:  DataTypes.STRING
  },
  imageUrl: {
    type:  DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  available: {
    type: DataTypes.BOOLEAN
  }
}, {
  freezeTableName: true
});
 
export default Piatto;