import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
import nodemailer from "nodemailer";
export interface IEmail {
  to: string;
  subject: string;
  body: string;
}
/* interface IUser {
  name: string;
  email: string;
} */
class SendEmailService {
  async execute(user_receiver: string) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const userToReceiveEmail = classToPlain(
      await usersRepository.findOne(user_receiver)
    );

    const { email } = userToReceiveEmail;

    //if (email) {
    /*  const sendEmail: IEmail = {
        to: email,
        subject: " New compliment",
        body: `Hello, 
          Congratulation !! You received a new compliment.
        `,
      }; */
    //app to send email (sendEmail)...
    //  return true;
    // }

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "dheff.nls@gmail.com",
        pass: "SolaGratia*05",
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "Fred Foo 👻 <foo@example.com>", // sender address
      to: "jeferson_nls@hotmail.com", // list of receivers
      subject: "Novo elogio ✔", // Subject line
      text: "Parabéns, você recebeu um novo elogio.", // plain text body
      html: "<b>Você é especial?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return nodemailer.getTestMessageUrl(info);
  }

  async main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "pasquale.daugherty@ethereal.email",
        pass: "ug89J1b3s6wGdQu9bN",
      },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "Fred Foo 👻 <foo@example.com>", // sender address
      to: "jeferson_nls@hotmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}

export { SendEmailService };
