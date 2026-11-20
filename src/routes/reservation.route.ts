import { Router } from "express";
import { list, read, create, update, remove } from '../controllers/reservation.controller';

export const reservationRouter = Router();

reservationRouter.get('/', list)
reservationRouter.get('/:id', read)
reservationRouter.post('/', create)
reservationRouter.put('/:id', update)
reservationRouter.delete('/:id', remove)

