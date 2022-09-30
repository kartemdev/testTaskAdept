'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      firstName: 'Иван',
      lastName: 'Иванов',
      jobTitle: 'Junior+',
      compId: 1, 
    },
    {
      firstName: 'Сергей',
      lastName: 'Сергеевич',
      jobTitle: 'Junior',
      compId: 1, 
    },
    {
      firstName: 'Пётр',
      lastName: 'Петрович',
      jobTitle: 'Senior+++',
      compId: 2, 
    },
    {
      firstName: 'Юлия',
      lastName: 'Павловна',
      jobTitle: 'Senior',
      compId: 3, 
    },
    {
      firstName: 'Алексей',
      lastName: 'Алксеевич',
      jobTitle: 'Middle+',
      compId: 3, 
    },
    {
      firstName: 'Григорий',
      lastName: 'Григорьевич',
      jobTitle: 'Senior+',
      compId: 4, 
    },
    {
      firstName: 'Карина',
      lastName: 'Артёмовна',
      jobTitle: 'Middle+',
      compId: 4, 
    },
    {
      firstName: 'Николай',
      lastName: 'Николаевич',
      jobTitle: 'Junior',
      compId: 5, 
    },
    {
      firstName: 'Дарья',
      lastName: 'Викторовная',
      jobTitle: 'Middle+',
      compId: 5, 
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      jobTitle: 'Junior+',
      compId: 6, 
    },
    {
      firstName: 'Сергей',
      lastName: 'Сергеевич',
      jobTitle: 'Junior',
      compId: 7, 
    },
    {
      firstName: 'Пётр',
      lastName: 'Петрович',
      jobTitle: 'Senior+++',
      compId: 8, 
    },
    {
      firstName: 'Юлия',
      lastName: 'Павловна',
      jobTitle: 'Senior',
      compId: 9, 
    },
    {
      firstName: 'Алексей',
      lastName: 'Алксеевич',
      jobTitle: 'Middle+',
      compId: 10, 
    },
    {
      firstName: 'Григорий',
      lastName: 'Григорьевич',
      jobTitle: 'Senior+',
      compId: 11, 
    },
    {
      firstName: 'Карина',
      lastName: 'Артёмовна',
      jobTitle: 'Middle+',
      compId: 12, 
    },
    {
      firstName: 'Николай',
      lastName: 'Николаевич',
      jobTitle: 'Junior',
      compId: 13, 
    },
    {
      firstName: 'Дарья',
      lastName: 'Викторовная',
      jobTitle: 'Middle+',
      compId: 14, 
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      jobTitle: 'Junior+',
      compId: 15, 
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
