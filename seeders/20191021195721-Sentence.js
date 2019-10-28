'use strict';

const sentences = [
    {
        string: 'has a great sense of humor, and knows how to make people laugh',
    },
    {
        string: 'is great at building up positive energy in a room with his/her sense of humor, and ability to make people laugh',
    },
    {
        string: 'is a master when it comes to making jokes and can turn any negative energy into barrels of laughter',
    },
    {
        string: 'is always in good spirits and looking on the bright side',
    },
    {
        string: 'does not get bogged down by negativity and is always looking for a silver lining',
    },
    {
        string: 'is always moving with a spring in his/her step exuberating positive energy to everyone around him/her',
    },
    {
        string: 'is perceived by many as highly intelligent and well articulated',
    },
    {
        string: 'is quick to grasp new concepts and has a proven track record, excelling in academic challenges',
    },
    {
        string: 'has a high IQ and is seen as a leader in the field of their academic endeavors',
    },
    {
        string: 'is a considerate person who always thinks about how his/her actions affect others',
    },
    {
        string: 'is a compassionate person who empathises with others and their unique challenges in life',
    },
    {
        string: 'is a thoughtful person who values relationships and makes time for the people they care about',
    },
    {
        string: 'believes honesty is always the best policy',
    },
    {
        string: 'has a reputation for his/her integrity and is seen as highly trustworthy to his/her peers',
    },
    {
        string: 'believes that honesty in the workplace is essential to establishing strong working relationships',
    },
    {
        string: 'is quick to think of new ideas',
    },
    {
        string: 'is the first to come up with a creative solution when faced with complex problems',
    },
    {
        string: 'is known by many as a realistic dreamer who is constantly thinking of ways to improve the world around us',
    },
    {
        string: 'is described by many as a go getter who is self motivated',
    },
    {
        string: 'knows what he\she wants and is prepared to push him/herself to reach his/her goals',
    },
    {
        string: 'never gives up and continues to take action despite obstacles in his/her path',
    },
    {
        string: 'is seen by many as a natural leader that others look up to',
    },
    {
        string: 'oozes with confidence and is highly assertive, making him/her and effective leader that others follow',
    },
    {
        string: 'is described as aspiring by his/her pairs which make him/her a persuasive leader',
    }];





module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sentences', sentences, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Sentences', null, {});
    }
}
