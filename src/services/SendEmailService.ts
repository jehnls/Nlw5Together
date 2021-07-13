import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

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
  async execute(user_receiver: string): Promise<boolean> {
    const usersRepository = getCustomRepository(UsersRepositories);

    const userToReceiveEmail = classToPlain(
      await usersRepository.findOne(user_receiver)
    );

    const { email } = userToReceiveEmail;

    if (email) {
      /*  const sendEmail: IEmail = {
        to: email,
        subject: " New compliment",
        body: `Hello, 
          Congratulation !! You received a new compliment.
        `,
      }; */
      //app to send email (sendEmail)...
      return true;
    }

    return false;
  }
}

export { SendEmailService };
