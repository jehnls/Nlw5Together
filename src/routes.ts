import { Router } from "express";
import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateComplimentController } from "@controllers/CreateComplimentController";
import { CreateTagController } from "@controllers/CreateTagController";
import { CreateUserController } from "@controllers/CreateUserController";
import { ListTagsController } from "@controllers/ListTagsController";
import { ListUserController } from "@controllers/ListUserController";
import { ListUserReceiveComplimentsController } from "@controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "@controllers/ListUserSendComplimentsController";
import { ScreenWelcomeController } from "@controllers/ScreenWelcomeController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { getEmailUserReceivedCompliment } from "@middlewares/getEmailUserReceivedCompliment";

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

//Welcome
router.get("/", showWelcomeController.hello);

//User
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);

//Tags
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

//Compliment
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle,
  getEmailUserReceivedCompliment
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

export { router };
