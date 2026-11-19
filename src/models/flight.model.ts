import type { HydratedDocument } from "mongoose";
import { mongoose } from '../configs/dbConnection';
import type { Types } from "mongoose";

export interface IFlight {
    flightNumber: string;
    airline: string;
    departure: string;
    departureDate: Date;
    arrival: string;
    arrivalDate: Date;
    createdId: Types.ObjectId
}

export type FlightBody = Pick<IFlight, 'flightNumber' | 'airline' | 'departure' | 'departureDate' | 'arrival' | 'arrivalDate'>;

export type FlightDocument = HydratedDocument<IFlight>;

const flightSchema = new mongoose.Schema<IFlight>({
      createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
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
        unique: true
    },

    departure: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    departureDate: {
        type: Date,
        trim: true,
        required: true,
        unique: true
    },

   arrival: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    arrivalDate: {
        type: Date,
        trim: true,
        required: true,
        unique: true
    },
    
}, { collection: 'flights', timestamps: true });

export default mongoose.model<IFlight>('Flight', flightSchema);