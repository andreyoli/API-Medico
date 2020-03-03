const { Model, DataTypes } = require('sequelize');

class Specialty extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Doctor, {
      foreignKey: 'specialty_id',
      through: 'doctor_specialties',
      as: 'doctors',
    });
  }
}

module.exports = Specialty;
