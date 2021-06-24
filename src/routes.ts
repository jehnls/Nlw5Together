import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { ShowWelcomeController } from "./controller/ShowWelcomeController";

const showWelcomeController = new ShowWelcomeController();
const createUserController = new CreateUserController();

const router = Router();

router.get("/", showWelcomeController.hello);

router.post("/users", createUserController.handle);

export { router };
