module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "5645645",
  DB: "Whatsapp",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
