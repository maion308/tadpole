'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordSentence = sequelize.define('KeywordSentence', {
    keyword_id: DataTypes.UUID,
    sentence_id: DataTypes.UUID
  }, {});
  KeywordSentence.associate = function (models) {
    KeywordSentence.belongsTo(models.Keyword, {
      foreignKey: 'keyword_id'
    })
    KeywordSentence.belongsTo(models.Sentence, {
      foreignKey: 'sentence_id'
    })
  };
  return KeywordSentence;
};