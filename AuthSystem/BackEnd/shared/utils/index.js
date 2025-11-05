const { sequelize } = require('../../config/database');
const User = require('./User');

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // alter: true modifica la tabla si es necesario
    console.log('Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

module.exports = {
  User,
  syncModels
};
