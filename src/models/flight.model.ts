import type { HydratedDocument } from "mongoose";
import { mongoose } from '../configs/dbConnection';
import type { Types } from "mongoose";

export interface IFlight {
    userId: Types.ObjectId
    flightNumber: string;
    airline: string;
    departure: string;
    departureDate: Date;
    arrival: string;
    arrivalDate: Date;
}

export type FlightBody = Pick<IFlight, 'flightNumber' | 'airline' | 'departure' | 'departureDate' | 'arrival' | 'arrivalDate'>;
export type FlightDocument = HydratedDocument<IFlight>;

const flightSchema = new mongoose.Schema<IFlight>({
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
        immutable: true
    },

    flightNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    airline: {
        type: String,
        trim: true,
        required: true,
    },

    departure: {
        type: String,
        trim: true,
        required: true,
    },

    departureDate: {
        type: Date,
        required: true,
    },

   arrival: {
        type: String,
        trim: true,
        required: true,
    },

    arrivalDate: {
        type: Date,
        required: true,
    },
    
}, { collection: 'flights', timestamps: true });

export default mongoose.model<IFlight>('Flight', flightSchema);