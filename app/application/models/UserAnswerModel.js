'use strict';

module.exports = function(args)
{
  var seq = args.MODULES.SEQUELIZE;
  var dt = args.MODULES.DATATYPES;

  var UserAnswer = seq.define('user_answer', {

    id : {
        type: dt.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true,
        unique: true
    },

    user_id : {
        type : dt.INTEGER,
        allowNull : false
    },

    word_id : {
        type : dt.INTEGER,
        allowNull : false
    },

    status : {
        type : dt.ENUM('correct', 'timeout', 'wrong'),
        allowNull : false
    },

    answer : {
        type: dt.STRING(100),
        allowNull: true
    }
  }, {
    freezeTableName : true,
    paranoid: true  
  });

  return UserAnswer;
};