'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Employee, {
        foreignKey: 'compId',
      })
    }
  }
  Company.init({
    name: DataTypes.STRING,
    countEmps: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    checked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
