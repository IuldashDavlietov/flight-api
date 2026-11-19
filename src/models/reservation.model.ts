import type { HydratedDocument } from "mongoose";
import { mongoose } from '../configs/dbConnection';
import type { Types } from "mongoose";

export interface IReservation {
    flightId: Types.ObjectId;
    passengers: Types.ObjectId;
    createdId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type ReservationBody = Pick<IReservation, 'flightId' | 'passengers'>;
export type ReservationDocument = HydratedDocument<IReservation>;

const reservationSchema = new mongoose.Schema<IReservation>({

    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    passengers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passenger'
    }]

}, { collection: 'reservations', timestamps: true });

export default mongoose.model<IReservation>('Reservation', reservationSchema);