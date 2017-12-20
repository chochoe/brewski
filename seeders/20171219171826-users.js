'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'Vlad',
        password: "dsagsdgf",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Boofer',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Borris',
        password: "heyo",
        age: 27,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'John',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Korkie',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Dork Man',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'An alligator',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Mohammad Sanchez',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Peeee',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'Gorn',
        password: "j",
        age: 23,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'Passionfruit',
        password: "j",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'Mike',
        password: "j",
        age: 25,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'Mark',
        password: "j",
        age: 26,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'abe',
        password: "heyo",
        age: 28,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'dope',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: 'rrrrrrrrrrrrrrrrrrrrrrrrrreeerrrrrrr',
        password: "heyo",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};