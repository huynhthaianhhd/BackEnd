import TicketHtml from './Ticket';
const nodemailer = require('nodemailer');
// const fs = require('fs');
// const { promisify } = require('util');
// const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.nodeEmail,
    pass: process.env.nodePassword,
    // Get From Google Console OAuth Credential
    clientId: process.env.clientIdGoogle,
    clientSecret: process.env.clientSecret,
    // Get From Google Developer OAuth20 PlayGround
    refreshToken: process.env.nodeMailerRefreshToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMailTicket = async ({
  receiverEmail,
  seat,
  total,
  pricePerSeat,
  nameOfCinema,
  nameOfMovie,
}) => {
  const mailOptions = {
    from: `"AE1N Tickets" Tickets@gmail.com`,
    to: `${receiverEmail}`,
    subject: 'You got ticket here!',
    html: TicketHtml({ seat, total, pricePerSeat, nameOfCinema, nameOfMovie }),
  };
  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error send Mail!', error);
        resolve({ success: false, error });
      } else {
        console.log('Mail sent');
        resolve({ success: true, info });
      }
    });
  });
};
