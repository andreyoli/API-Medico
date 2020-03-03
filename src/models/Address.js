const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(connection) {
    super.init(
      {
        city: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Doctor, { foreignKey: 'doctor_id', as: 'owner' });
  }
}

module.exports = Address;
