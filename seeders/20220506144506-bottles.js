'use strict';

const falso = require('@ngneat/falso')


const wine = [...Array(10)].map(() => ({
  name: falso.rand(["L'Ange Rouge", "Brut Rose", "E.L.W"]), 
  winery: falso.rand(["Calcareous", "Laetitia", "Dilecta"]),
  region: falso.rand(["Napa", "Paso Robles", "Los Olivos"]),
  vintage: falso.randPastDate(),
  varietal: falso.rand(["Cabernet Sauvignon", "Rose", "Sauv Blanc"]),
  still: falso.randBoolean(),
  row: falso.rand([1,2,3]),
  column: falso.rand([1,2,3]),
  color: falso.rand(["Red", "White", "Rose"]),
  notes: falso.randParagraph(),
  user_id: falso.rand([1,2,3]),
  storage_id: falso.rand([1,2,3,4,5]),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bottles', wine)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('bottles') 
   
  }
};
