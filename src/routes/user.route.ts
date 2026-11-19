import { Router } from "express";
import { list } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get('/', list)