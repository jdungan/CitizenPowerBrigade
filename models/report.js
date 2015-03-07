"use strict";
module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define("Report", {
    unit_id: DataTypes.STRING,
    blob: DataTypes.JSONB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Report;
};