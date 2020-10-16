const router = require('express').Router();
const { registerUserDB } = require('../controllers/sendMailController');
const { emailRegister } = require('../config/nodemailer');

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/sendmail', registerUserDB, emailRegister);

module.exports = router;
