'use strict';

module.exports = function(args)
{
  var seq = args.MODULES.SEQUELIZE;
  var dt = args.MODULES.DATATYPES;

  var Word = seq.define('word', {

    id : {
        type: dt.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true,
        unique: true
    },

    word : {
        type : dt.STRING(100),
        allowNull : false,
        unique: true
    },

    scramble_word : {
        type : dt.STRING(100),
        allowNull : false
    },
    
    hint : {
        type : dt.STRING(100),
        allowNull : false
    },

    hint_2 : {
        type : dt.STRING(100),
        allowNull : false
    }
  }, {
    freezeTableName : true,
    paranoid: true  
  });

  return Word;
};