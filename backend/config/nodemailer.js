require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'servidor1346.il.controladordns.com',
  port: 587,
  secre: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.PASSWORD,
  },
});

exports.emailRegister = (req, res) => {
  const { email, number, name } = req.body;
  const mailOptions = {
    from: 'sade.trujillo@parvati.com.mx',
    to: 'sade.trujillo@parvati.com.mx',
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
