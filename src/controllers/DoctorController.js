/* eslint-disable camelcase */
// const { Op } = require('sequelize');
const Doctor = require('../models/Doctor');
const Specialty = require('../models/Specialty');
const Address = require('../models/Address');

module.exports = {
  async index({ res }) {
    const doctors = await Doctor.findAll({
      include: [{ association: 'specialties' }, { association: 'addresses' }],
    });

    return res.json(doctors);
  },

  async store(req, res) {
    const { name, crm, phone, city, state, specialties } = req.body;

    const doctor = await Doctor.findOne({ where: { crm } });

    if (doctor) {
      return res.status(400).json({ error: 'CRM already registered' });
    }

    const newDoctor = await Doctor.create({
      name,
      crm,
      phone,
    });

    await Address.create({
      city,
      state,
      doctor_id: newDoctor.id,
    });

    await specialties.map(async specialty => {
      const [specialtyValue] = await Specialty.findAll({
        where: { name: specialty },
      });

      if (specialtyValue) {
        await newDoctor.addSpecialty(specialtyValue);
      }
    });

    return res
      .status(200)
      .json({ sucess: 'Registered doctor', log: newDoctor });
  },

  async delete(req, res) {
    const { doctor_id } = req.body;

    const doctor = await Doctor.findByPk(doctor_id);

    if (!doctor) {
      return res.status(400).json({ error: 'Doctor not found' });
    }

    const spec = await Specialty.findAll();

    await doctor.removeSpecialty(spec);
    doctor.destroy();

    return res.json({ sucess: 'Doctor deleted' });
  },

  // async find(req, res) {
  //   const { search } = req.params;

  //   const doctor = await Doctor.findAll({
  //     where: {
  //       [Op.or]: [{ name: search }, { crm: search }],
  //     },
  //   });

  //   if (!doctor) {
  //     return res.status(400).json({ error: 'Doctor not found' });
  //   }

  //   return res.json(doctor);
  // },

  async update(req, res) {
    const data = req.body;
    const { crm } = req.body;

    const doctor = await Doctor.findOne({
      where: { crm },
      include: [
        {
          association: 'addresses',
        },
        {
          association: 'specialties',
        },
      ],
    });

    if (!doctor) {
      return res.status(400).json({ error: 'Doctor not found' });
    }

    await Doctor.update(
      { name: data.name, crm, phone: data.phone },
      { where: { id: doctor.id } }
    );
    await Address.update(
      { state: data.state, city: data.city },
      { where: { doctor_id: doctor.id } }
    );
    const test = await Specialty.findAll();
    await doctor.removeSpecialties(test);

    const specialtyNew = await Specialty.findAll({
      where: { name: data.newSpecialty },
    });

    if (!specialtyNew) {
      return res.status(400).json({ error: 'speciality not found' });
    }

    await doctor.addSpecialties([...specialtyNew]);

    return res.status(200).json({ sucess: 'Value updated' });
  },
};
