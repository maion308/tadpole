const { Keyword, KeywordSentence, Sentence } = require('../models')

const getAllKeywords = async (req, res) => {
  try {
    const words = await Keyword.findAll({
      include: [{
        model: Sentence,
        as: 'sentences',
        attributes: ['string', 'id'],
      }]
    })
    res.json(words)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  // createKeyword,
  getAllKeywords,
  // updateKeyword
}