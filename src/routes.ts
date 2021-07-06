import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListTagsController } from "./controller/ListTagsController";
import { ListUserController } from "./controller/ListUserController";
import { ListUserReceiveComplimentsController } from "./controller/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controller/ListUserSendComplimentsController";
import { ScreenWelcomeController } from "./controller/ScreenWelcomeController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const showWelcomeController = new ScreenWelcomeController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();
const router = Router();

router.get("/", showWelcomeController.hello);
router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/user/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/user/compliments/receiver",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);
export { router };
