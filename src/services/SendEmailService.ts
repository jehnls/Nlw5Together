interface IEmail {
  to: string;
  subject: string;
  body: string;
}

interface IUser {
  name: string;
  email: string;
}

class SendEmailService {
  async execute(email: string): Promise<boolean> {
    try {
      const sendEmail: IEmail = {
        to: email,
        subject: " New compliment",
        body: `Hello, 
        Congratulation !! You received a new compliment.
      `,
      };
      //app to send email (sendEmail)...

      return true;
    } catch (error) {
      return error;
    }
  }
}

export { SendEmailService };
