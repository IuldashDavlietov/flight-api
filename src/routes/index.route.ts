import { Router } from "express";
import { userRouter } from "./user.route";
export const globalRouter: Router = Router();

const routes = [
    { path: '/users', router: userRouter }
]

routes.forEach(({ path, router }) => {
    globalRouter.use(path, router)
})
