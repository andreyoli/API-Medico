const express = require('express');
const DoctorController = require('./controllers/DoctorController');
const AddressController = require('./controllers/AddressController');
const SpecialtyController = require('./controllers/SpecialtyController');

const routes = express.Router();

routes.post('/doctor_register', DoctorController.store);

routes.post(
  '/doctor_register/:doctor_id/address_register',
  AddressController.store
);
routes.get('/doctor_register/:doctor_id/address_show', AddressController.show);
routes.post('/doctor_register/:doctor_id/specialty', SpecialtyController.store);

module.exports = routes;
