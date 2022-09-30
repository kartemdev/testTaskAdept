require('dotenv').config();

module.exports = {

  // Раскоментировать, и указать свои данные для запуска локально
 
  // development: {
  //   username: "intro_user",
  //   password: "intro_user",
  //   database: "taskAdept",
  //   host: "127.0.0.1",
  //   dialect: "postgres"
  // },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {rejectUnauthorized: false}
    }
  },
};
