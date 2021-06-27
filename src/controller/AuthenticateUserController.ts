import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AutheticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return res.json(token);
  }
}

export { AuthenticateUserController };