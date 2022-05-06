'use strict';
const falso = require('@ngneat/falso')
const users = [...Array(5)].map(() => ({
  username: falso.randUserName(),
  email: falso.randEmail(),
  password: falso.randPassword(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users') 
  }
};
