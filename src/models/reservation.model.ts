import type { HydratedDocument } from "mongoose";
import { mongoose } from '../configs/dbConnection';
import type { Types } from "mongoose";

export interface IReservation {
    flightId: Types.ObjectId;
    passengers: Types.ObjectId[];
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
        required: true,
        immutable: true
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        immutable: true
    },

    passengers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Passenger',
        }],
        validate: {
            validator: (val: Types.ObjectId[]) => Array.isArray(val) && val.length > 0,
            message: 'At least one passenger is required.'
        },
        required: true
    }

}, { collection: 'reservations', timestamps: true });

export default mongoose.model<IReservation>('Reservation', reservationSchema);