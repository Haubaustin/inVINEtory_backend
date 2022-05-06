'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Storage.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Storage.hasMany(models.bottles, {
        foreignKey: "storage_id",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Storage.init({
    name: DataTypes.STRING,
    columns: DataTypes.INTEGER,
    rows: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Storage',
    tableName: 'storages'
  });
  return Storage;
};