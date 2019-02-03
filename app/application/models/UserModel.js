'use strict';

module.exports = function(args)
{
  var seq = args.MODULES.SEQUELIZE;
  var dt = args.MODULES.DATATYPES;

  var User = seq.define('user', {

    id : {
        type: dt.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true,
        unique: true
    },

    username : {
        type : dt.STRING(100),
        allowNull : false,
        unique: true
    },

    email : {
        type : dt.STRING(100),
        allowNull : false
    },

    total_hint : {
        type : dt.INTEGER,
        defaultValue : 3,
        allowNull : false
    },

    score : {
        type : dt.INTEGER,
        defaultValue : 100,
        allowNull : false
    }
  }, {
    freezeTableName : true,
    paranoid: true  
  });

  return User;
};