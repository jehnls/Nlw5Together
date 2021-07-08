import { NextFunction, Request, Response } from "express";
import { SendEmailService } from "../services/SendEmailService";

function getEmailUserReceived(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { email } = req.body;

  const sendEmailservice = new SendEmailService();

  const sendemail = sendEmailservice.execute(email);

  //if(sendEmail )
}

export { getEmailUserReceived };
