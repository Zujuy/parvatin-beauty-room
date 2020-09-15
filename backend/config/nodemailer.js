require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.PASSWORD,
  },
});

exports.emailRegister = (req, res) => {
  const { email, number, name } = req.body;
  const mailOptions = {
    from: 'basededatos@parvati.com.mx',
    to: 'bichous07@gmail.com',
    subject: `Nuevo usuario registrado`,
    text: `
    Un nuevo usuario se ha registrado:
    Nombre: ${name}
    Numero: ${number}
    Correo: ${email}
    `,
  };
  return transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        message: 'Registro existoso.',
      });
    }
  });
};
