'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Companies', [{
      name: 'Интересная компания',
      countEmps: 2,
      adress: 'Москва, улица Профсоюзная',
     },
     {
      name: 'Амбициозная компания',
      countEmps: 1,
      adress: 'Москва, улица Вавилова',
     },
     {
      name: 'Крупная компания',
      countEmps: 2,
      adress: 'Москва, улица Арбат',
     },
     {
      name: 'Инновационная компания',
      countEmps: 2,
      adress: 'Москва, улица Центральная',
     },
     {
      name: 'Новая компания',
      countEmps: 2,
      adress: 'Москва, улица Мирная',
     },
     {
      name: 'React компания',
      countEmps: 2,
      adress: 'Москва, улица Аргуновксая',
     },
     {
      name: 'Redux компания',
      countEmps: 1,
      adress: 'Москва, улица Барклая',
     },
     {
      name: 'JavaScript компания',
      countEmps: 2,
      adress: 'Москва, улица Воронежская',
     },
     {
      name: 'HTML компания',
      countEmps: 2,
      adress: 'Москва, улица Валовая',
     },
     {
      name: 'CSS компания',
      countEmps: 2,
      adress: 'Москва, улица Гагарина',
     },
     {
      name: 'Python компания',
      countEmps: 2,
      adress: 'Москва, улица Войкова',
     },
     {
      name: 'Sequelize-cli компания',
      countEmps: 1,
      adress: 'Москва, улица Гамалеи',
     },
     {
      name: 'Ruby компания',
      countEmps: 2,
      adress: 'Москва, улица Забелина',
     },
     {
      name: 'PHP компания',
      countEmps: 2,
      adress: 'Москва, улица Звенигородская',
     },
     {
      name: 'Kotlin компания',
      countEmps: 2,
      adress: 'Москва, улица Каманина',
     },
     {
      name: 'Интересная компания',
      countEmps: 2,
      adress: 'Москва, улица Профсоюзная',
     },
     {
      name: 'Амбициозная компания',
      countEmps: 1,
      adress: 'Москва, улица Вавилова',
     },
     {
      name: 'Крупная компания',
      countEmps: 2,
      adress: 'Москва, улица Арбат',
     },
     {
      name: 'Инновационная компания',
      countEmps: 2,
      adress: 'Москва, улица Центральная',
     },
     {
      name: 'Новая компания',
      countEmps: 2,
      adress: 'Москва, улица Мирная',
     },
     {
      name: 'React компания',
      countEmps: 2,
      adress: 'Москва, улица Аргуновксая',
     },
     {
      name: 'Redux компания',
      countEmps: 1,
      adress: 'Москва, улица Барклая',
     },
     {
      name: 'JavaScript компания',
      countEmps: 2,
      adress: 'Москва, улица Воронежская',
     },
     {
      name: 'HTML компания',
      countEmps: 2,
      adress: 'Москва, улица Валовая',
     },
     {
      name: 'CSS компания',
      countEmps: 2,
      adress: 'Москва, улица Гагарина',
     },
     {
      name: 'Python компания',
      countEmps: 2,
      adress: 'Москва, улица Войкова',
     },
     {
      name: 'Sequelize-cli компания',
      countEmps: 1,
      adress: 'Москва, улица Гамалеи',
     },
     {
      name: 'Ruby компания',
      countEmps: 2,
      adress: 'Москва, улица Забелина',
     },
     {
      name: 'PHP компания',
      countEmps: 2,
      adress: 'Москва, улица Звенигородская',
     },
     {
      name: 'Kotlin компания',
      countEmps: 2,
      adress: 'Москва, улица Каманина',
     },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
