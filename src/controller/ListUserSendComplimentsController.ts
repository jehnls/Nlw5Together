import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const SendCompliments = await listUserSendComplimentsService.execute(
      user_id
    );

    return res.json(SendCompliments);
  }
}

export { ListUserSendComplimentsController };
