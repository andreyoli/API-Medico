const express = require('express');
const DoctorController = require('./controllers/DoctorController');
const AddressController = require('./controllers/AddressController');
const SpecialtyController = require('./controllers/SpecialtyController');

const routes = express.Router();

routes.post('/doctor_register', DoctorController.store); // Cadastro de médico
routes.post('/doctor_delete', DoctorController.delete); // Remover médico
routes.get('/doctor_index', DoctorController.index); // Listar todos os médicos
routes.post('/doctor_update', DoctorController.update); // Atualizar médico
// routes.get('/doctor_find/:search', DoctorController.find); // Buscar médico

routes.post(
  '/doctor_register/:doctor_id/address_register',
  AddressController.store
); // Cadastro do endereço do médico

routes.post('/specialty_register', SpecialtyController.store); // Cadastro das especialidades
routes.get('/specialty_index', SpecialtyController.index); // Listar especialidades

module.exports = routes;
