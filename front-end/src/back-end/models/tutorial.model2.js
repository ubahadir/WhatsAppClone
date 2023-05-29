module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define(
    "wpsample",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      index: {
        type: Sequelize.INTEGER,
      },
      message: {
        type: Sequelize.STRING,
      },
      messageid: {
        type: Sequelize.STRING,
        unique: true,
      },
      msgdate: {
        type: Sequelize.STRING,
      },
      msghour: {
        type: Sequelize.STRING,
      },
      msgperson: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
      sequelize,
      modelName: "Tutorial",
      tableName: "wpsample",
      timestamps: false,
      underscore: true,
    }
  );

  return Tutorial;
};
