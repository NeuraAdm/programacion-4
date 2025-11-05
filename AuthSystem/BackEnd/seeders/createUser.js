const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/database');
const User = require('../shared/utils/User');

const createTestUser = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');

    // Crear usuario de prueba
    const hashedPassword = await bcrypt.hash('123456', 10);

    const user = await User.create({
      documentNumber: '12345678',
      username: 'testuser',
      password: hashedPassword,
      email: 'test@example.com',
      isActive: true
    });

    console.log('Usuario creado:', user.toJSON());
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
};

createTestUser();
