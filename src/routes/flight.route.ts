import { Router } from "express";
import { list, read, create, update, remove } from '../controllers/flight.controller';

export const flightRouter = Router();

flightRouter.get('/', list)
flightRouter.get('/:id', read)
flightRouter.post('/', create)
flightRouter.put('/:id', update)
flightRouter.delete('/:id', remove)

