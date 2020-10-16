const PotentialUser = require('../models/PotentialUser');
exports.registerUserDB = (req, res, next) => {
  PotentialUser.create({ ...req.body })
    .then((registed) => {
      res.status(200).json({ messsage: 'Usuario registrado' });
      next();
    })
    .catch((err) => {
      res.status(500).json({ message: 'El usuario no se pudo registrar' });
    });
};
