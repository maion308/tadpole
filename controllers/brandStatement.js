const { BrandStatement, Keyword, KeywordBrandStatements } = require("../models")
const sequelize = require('sequelize')

const getAllBrandStatements = (req, res) => {
  BrandStatement.findAll({
    order: sequelize.literal('rank DESC'),
  }, { limit: 15 })
    .then(statement => {
      res.json(statement)
    })
    .catch(e => res.json({ error: e }))
}

const findBrandStatementById = (req, res) => {
  const id = req.params.id;
  BrandStatement.findByPk(id)
    .then(statement => res.json(statement))
    .catch(e => res.json({ error: e }))
}

module.exports = {
  getAllBrandStatements,
  findBrandStatementById
}