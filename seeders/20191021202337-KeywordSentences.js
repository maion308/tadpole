'use strict';


const sentences = [
    {
        sentence_id: 1,
        keyword_id: 1
    },
    {
        sentence_id: 2,
        keyword_id: 1
    },
    {
        sentence_id: 3,
        keyword_id: 1
    },
    {
        sentence_id: 4,
        keyword_id: 2
    },
    {
        sentence_id: 5,
        keyword_id: 2
    },
    {
        sentence_id: 6,
        keyword_id: 2
    },
    {
        sentence_id: 7,
        keyword_id: 3
    },
    {
        sentence_id: 8,
        keyword_id: 3
    },
    {
        sentence_id: 9,
        keyword_id: 3
    },
    {
        sentence_id: 10,
        keyword_id: 4
    },
    {
        sentence_id: 11,
        keyword_id: 4
    },
    {
        sentence_id: 12,
        keyword_id: 4
    },
    {
        sentence_id: 13,
        keyword_id: 5
    },
    {
        sentence_id: 14,
        keyword_id: 5
    },
    {
        sentence_id: 15,
        keyword_id: 5
    },
    {
        sentence_id: 16,
        keyword_id: 6
    },
    {
        sentence_id: 17,
        keyword_id: 6
    },
    {
        sentence_id: 18,
        keyword_id: 6
    },
    {
        sentence_id: 19,
        keyword_id: 7
    },
    {
        sentence_id: 20,
        keyword_id: 7
    },
    {
        sentence_id: 21,
        keyword_id: 7
    },
    {
        sentence_id: 22,
        keyword_id: 8
    },
    {
        sentence_id: 23,
        keyword_id: 8
    },
    {
        sentence_id: 24,
        keyword_id: 8
    }];



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('KeywordSentences', sentences, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('KeywordSentences', null, {});
    }
}

