import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "@services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const listUserReceiverComplimentsService =
      new ListUserReceiveComplimentsService();

    const ReceiverCompliments =
      await listUserReceiverComplimentsService.execute(user_id);

    return res.json(ReceiverCompliments);
  }
}

export { ListUserReceiveComplimentsController };
