'use strict';

module.exports = function(args)
{
  var seq = args.MODULES.SEQUELIZE;
  var dt = args.MODULES.DATATYPES;

  var Admin = seq.define('admin', {

    id : {
      type: dt.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true,
      unique: true
    },

    email : {
      type : dt.STRING(100),
      allowNull : false,
      unique: true
    },

    salt : {
      type : dt.TEXT,
      allowNull : false
    },

    iterations : {
      type : dt.INTEGER,
      allowNull : false
    },

    password : {
      type : dt.TEXT,
      allowNull : false
    }
  }, {
    freezeTableName : true,
    paranoid: true  
  });

  return Admin;
};