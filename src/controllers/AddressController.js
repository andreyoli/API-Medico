/* eslint-disable camelcase */
const Doctor = require('../models/Doctor');
const Address = require('../models/Address');

module.exports = {
  async store(req, res) {
    const { doctor_id } = req.params;
    const { city, state } = req.body;

    const doctor = await Doctor.findByPk(doctor_id);

    if (!doctor) {
      return res.status(400).json({ error: 'Doctor not registered' });
    }
    const address = await Address.create({
      city,
      state,
      doctor_id,
    });

    return res.json(address);
  },

  async show(req, res) {
    const { doctor_id } = req.params;

    const doctor = await Doctor.findByPk(doctor_id, {
      include: { association: 'addresses' },
    });

    return res.json(doctor);
  },
};
