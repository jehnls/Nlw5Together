import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ShowWelcomeController } from "./controller/ShowWelcomeController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const showWelcomeController = new ShowWelcomeController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const router = Router();

router.get("/", showWelcomeController.hello);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
