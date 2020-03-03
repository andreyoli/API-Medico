const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const Address = require('../models/Address');
const Specialty = require('../models/Specialty');

const connection = new Sequelize(dbConfig);

Doctor.init(connection);
Address.init(connection);
Specialty.init(connection);

Doctor.associate(connection.models);
Address.associate(connection.models);
Specialty.associate(connection.models);

module.exports = connection;
