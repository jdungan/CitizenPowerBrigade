"use strict";
fs        = require("fs");
path      = require("path");
Sequelize = require("sequelize");
basename  = path.basename(module.filename);
env       = process.env.NODE_ENV || "development";
config    = require(__dirname + '/../config/config.json')[env];

config.host = process.env.DATABASE_URL

sequelize = new Sequelize(config.database, config.username, config.password, config);
db        = {};




fs
  .readdirSync(__dirname)
  .filter( (file) ->
    return (file.indexOf(".") isnt 0) and (file isnt basename);
  )
  .forEach((file) ->
    model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  )

Object.keys(db).forEach (modelName) ->
  if "associate" in db[modelName]
    db[modelName].associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
