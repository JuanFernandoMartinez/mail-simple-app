const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "jm1811324@gmail.com", // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });


  transporter.verify().then(()=>{
    console.log("Mailer is ready");
  })


  export default transporter;