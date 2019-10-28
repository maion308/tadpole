'use strict';


const words = [{
  word: "Funny",
},
{
  word: "Happy",
},
{
  word: "Intelligent"
},
{
  word: "Kind"
},
{
  word: "Honest"
},
{
  word: "Creative"
},
{
  word: "Driven"
},
{
  word: "leader"
}]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Keywords', words, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Keywords', null, {});
  }
}
