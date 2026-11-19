import User from '../models/user.model';
import type { RequestHandler } from 'express';
import { CustomError } from '../utils';


const list: RequestHandler = async (req, res) => {
    const result = await res.getModelList(User)
    res.status(200).send({
        success: true,
        result
    })
}

const read: RequestHandler = async (req, res) => {
    const result = await User.findById(req.params.id)
    res.status(200).send({
        success: true,
        result
    })
}

const create: RequestHandler = async (req, res) => {
    const result = await User.create(req.body)
    res.status(200).send({
        success: true,
        result
    })
}

const update: RequestHandler = async (req, res) => {
   const result = await User.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    returnDocument: "after",
  });
    res.status(200).send({
        success: true,
        result
    })
}

const remove: RequestHandler = async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);

  if (!result) throw new CustomError("Data is not found or already deleted.", 404);
  res.sendStatus(204);
};

export { list, read, create, update, remove }