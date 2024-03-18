// emailHelper.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: 'alojalux9@gmail.com',
    pass: 'wontiovwcjesnnmt'
  }
});

async function sendBookingConfirmationEmail(bookingData) {
  try {
    await transporter.sendMail({
      from: 'alojalux9@gmail.com',
      to: bookingData.email,
      subject: 'Reserva Registrada Exitosamente',
      text: `Hola ${bookingData.name},\n\nTu reserva ha sido registrada exitosamente en nuestro hotel.\n\nGracias por confiar en nosotros.\n\nSaludos, Equipo de la compañia de Hoteles AlojaLux.`,
    });
  } catch (error) {
    console.error('Error al enviar el correo electrónico de confirmación de reserva:', error);
    throw error;
  }
}

module.exports = {
  sendBookingConfirmationEmail
};
