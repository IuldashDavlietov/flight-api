import User from '../models/user.model';
import type { RequestHandler } from 'express';


const list: RequestHandler = (req, res) => {
const result = res.getModelList(User)

res.status(200).send({
    success: true,
    result
})
}

export {list}