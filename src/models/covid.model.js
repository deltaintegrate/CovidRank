module.exports = (sequelize, Sequelize) => {
    const Coviduser = sequelize.define("covid", {
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
          type: Sequelize.STRING
      }
    });
  
    return Coviduser;
  };