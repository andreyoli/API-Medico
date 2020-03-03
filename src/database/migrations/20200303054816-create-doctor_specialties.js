module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctor_specialties', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'doctors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelte: 'CASCADE',
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'specialties', key: 'id' },
        onUpdate: 'CASCADE',
        onDelte: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('doctor_specialties');
  },
};
