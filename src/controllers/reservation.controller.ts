import Reservation from '../models/passengers.model';
import type { RequestHandler } from 'express';
import { CustomError } from '../utils';


const list: RequestHandler = async (req, res) => {
    const result = await res.getModelList(Reservation)
    res.status(200).send({
        success: true,
        result
    })
}

const read: RequestHandler = async (req, res) => {
    const result = await Reservation.findById(req.params.id)
    res.status(200).send({
        success: true,
        result
    })
}

const create: RequestHandler = async (req, res) => {
    const result = await Reservation.create(req.body)
    res.status(200).send({
        success: true,
        result
    })
}

const update: RequestHandler = async (req, res) => {
   const result = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    returnDocument: "after",
  });
    res.status(200).send({
        success: true,
        result
    })
}

const remove: RequestHandler = async (req, res) => {
  const result = await Reservation.findByIdAndDelete(req.params.id);

  if (!result) throw new CustomError("Data is not found or already deleted.", 404);
  res.sendStatus(204);
};

export { list, read, create, update, remove }