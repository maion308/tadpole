const { Sentence } = require('../models')

const createSentence = (req, res) => {
  Sentence.create(req.body)
    .then(sentence => {
      res.json(sentence)
    })
    .catch(e => res.json({ error: e }))
}

module.exports = {
  createSentence,
}
