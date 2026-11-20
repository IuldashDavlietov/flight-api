import { Router } from "express";
import { userRouter } from "./user.route";
import { flightRouter } from './flight.route';
import { reservationRouter } from "./reservation.route";
import { passengerRouter } from "./passenger.route";


export const globalRouter: Router = Router();

const routes = [
    { path: '/users', router: userRouter },
    { path: '/flights', router: flightRouter },
    { path: '/reservations', router: reservationRouter },
    { path: '/passengers', router: passengerRouter }
]

routes.forEach(({ path, router }) => {
    globalRouter.use(path, router)
})
