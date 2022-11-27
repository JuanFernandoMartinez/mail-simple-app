import SendEmail from "../../models/mail/sendMail";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  SendEmail("brayanortizbastidas82@gmail.com","Prueba de automatización de correos", '<h1>Hola Brayan!</h1> <img src = "https://pbs.twimg.com/profile_images/875726653443514368/Lv0l39wG_400x400.jpg" >')

  res.send("done")
}
