const Doctor = require('../models/Doctor');

module.exports = {
  async store(req, res) {
    const { name, crm, phone } = req.body;

    const doctor = await Doctor.create({ name, crm, phone });

    return res.json(doctor);
  },
};
