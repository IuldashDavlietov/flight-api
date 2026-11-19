import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get('/', list)
userRouter.get('/:id', read)
userRouter.post('/', create)
userRouter.put('/:id', update)
userRouter.delete('/:id', remove)
