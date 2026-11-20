import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/passenger.controller";

export const passengerRouter = Router();

passengerRouter.get('/', list)
passengerRouter.get('/:id', read)
passengerRouter.post('/', create)
passengerRouter.put('/:id', update)
passengerRouter.delete('/:id', remove)
