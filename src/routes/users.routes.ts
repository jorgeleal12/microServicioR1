import { Router } from "express";
import { createUserController } from "../core/users";



const userRoutes = Router();

userRoutes.route("/user/create").get(createUserController.createUser);

export { userRoutes};