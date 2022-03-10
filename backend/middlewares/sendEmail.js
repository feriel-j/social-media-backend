const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1f52d69c6e34fc",
      pass: "fe610e3bff126c",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
