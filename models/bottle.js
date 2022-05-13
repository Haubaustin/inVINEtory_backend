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
      Bottle.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Bottle.belongsTo(models.Storage, {
        foreignKey: "storage_id",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Bottle.init({
    name: DataTypes.STRING,
    winery: DataTypes.STRING,
    region: DataTypes.STRING,
    vintage: DataTypes.STRING,
    varietal: DataTypes.STRING,
    still: DataTypes.BOOLEAN,
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    color: DataTypes.STRING,
    notes: DataTypes.TEXT,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    storage_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'storages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Bottle',
    tableName: 'bottles'
  });
  return Bottle;
};