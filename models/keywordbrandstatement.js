'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordBrandStatement = sequelize.define('KeywordBrandStatement', {
    keyword_id: DataTypes.INTEGER,
    brandstatement_id: DataTypes.INTEGER
  }, {});
  KeywordBrandStatement.associate = function (models) {
    KeywordBrandStatement.belongsTo(models.Keyword, {
      foreignKey: 'keyword_id',
      onDelete: 'CASCADE'
    })
    KeywordBrandStatement.belongsTo(models.BrandStatement, {
      foreignKey: 'brandstatement_id',
      onDelete: 'CASCADE'
    })
  };
  return KeywordBrandStatement;
};