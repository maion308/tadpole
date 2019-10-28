'use strict';
module.exports = (sequelize, DataTypes) => {
  const BrandStatement = sequelize.define('BrandStatement', {
    statement: DataTypes.TEXT,
    rank: DataTypes.INTEGER,
  }, {});
  BrandStatement.associate = function (models) {
    BrandStatement.belongsToMany(models.Keyword, {
      through: 'KeywordBrandStatements',
      foreignKey: 'brandstatement_id',
    })
  };
  return BrandStatement;
};