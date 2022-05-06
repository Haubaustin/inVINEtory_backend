'use strict';
const falso = require('@ngneat/falso')
const storage = [...Array(5)].map(() => ({
  name: "Fridge",
  columns: falso.rand([2,3,4]),
  rows: falso.rand([2,3,4]),
  user_id: falso.rand([1,2,3,4]),
  createdAt: new Date(),
  updatedAt: new Date()
})) 

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('storages', storage)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('storages') 
   
  }
};
