const Specialty = require('../models/Specialty');

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const clearName = name.toLowerCase();
    const [specialty, exists] = await Specialty.findOrCreate({
      where: { name: clearName },
    });

    if (!exists) {
      return res.status(400).json({ error: 'Specialty already registered' });
    }

    return res.status(200).json(`${specialty} has been created`);
  },
  async index({ res }) {
    const specialties = await Specialty.findAll({
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    });

    return res.json(specialties);
  },
};
