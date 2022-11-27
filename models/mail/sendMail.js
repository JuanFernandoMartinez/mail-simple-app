import transporter from "./mailer";


async function SendEmail(email, subject, html){
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <jm1811324@gmail.com>', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        //text: "Hello world?", // plain text body
        html: html, // html body
      });
}

export default SendEmail