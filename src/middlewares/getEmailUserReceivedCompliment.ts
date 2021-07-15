import { NextFunction, Request, Response } from "express";
import { SendEmailService } from "../services/SendEmailService";

async function getEmailUserReceivedCompliment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sendEmailService = new SendEmailService();

  const { user_receiver } = req.body;
  const sendEmail = await sendEmailService.execute(user_receiver);

  if (sendEmail) {
    res.status(200).json({ sendEmail });
  }

  return res.status(400).json({
    error: "Usuario não possui email cadastrado.",
  });
}

export { getEmailUserReceivedCompliment };
