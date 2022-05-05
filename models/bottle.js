'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bottle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bottle.init({
    name: DataTypes.STRING,
    vintage: DataTypes.STRING,
    varietal: DataTypes.STRING,
    still: DataTypes.BOOLEAN,
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    color: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Bottle',
    tableName: 'bottles'
  });
  return Bottle;
};