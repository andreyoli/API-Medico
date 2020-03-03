const { Model, DataTypes } = require('sequelize');

class Doctor extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        crm: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'doctor_id', as: 'addresses' });
    this.belongsToMany(models.Specialty, {
      foreignKey: 'doctor_id',
      through: 'doctor_specialties',
      as: 'specialties',
    });
  }
}

module.exports = Doctor;
