'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sentence = sequelize.define('Sentence', {
    string: DataTypes.TEXT
  }, {});
  Sentence.associate = function (models) {
    Sentence.belongsToMany(models.Keyword, {
      through: 'KeywordSentence',
      as: 'keywords',
      foreignKey: 'sentence_id',
      otherkey: 'keyword_id'
    })
  };
  return Sentence;
};