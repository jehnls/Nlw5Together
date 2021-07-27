import jest from "jest";

import { IEmail, SendEmailService } from "../SendEmailService";

describe("Email Test", () => {
  it("Should return email sending", () => {
    const sendEmailService = new SendEmailService();
    const email: IEmail = {
      to: "",
      subject: "",
      body: "",
    };

    const sendingEmail = sendEmailService.execute("jf");

    expect(sendingEmail).toEqual(true);
  });
});
