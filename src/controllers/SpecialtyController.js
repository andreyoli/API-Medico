const Doctor = require('../models/Doctor');
const Specialty = require('../models/Specialty');

module.exports = {
  async store(req, res) {
    const { doctor_id } = req.params;
    const { name } = req.body;

    const doctor = await Doctor.findByPk(doctor_id);

    if (!doctor) {
      return res.status(400).json({ error: 'Doctor not registered' });
    }

    const [specialty] = await Specialty.findOrCreate({
      where: { name },
    });

    await doctor.addSpecialty(specialty);
    return res.json(specialty);
  },
};
