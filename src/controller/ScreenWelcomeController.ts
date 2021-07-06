import {Request, Response} from "express";

class ScreenWelcomeController {
  async hello(req: Request, res: Response) : Promise<Response>{
   return res.send("Hello There, Welcome in us API");
  }
}

export { ScreenWelcomeController };
