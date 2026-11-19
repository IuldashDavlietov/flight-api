import type { HydratedDocument, Types } from "mongoose";
import { mongoose } from '../configs/dbConnection';

export interface IPassenger {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    createdId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date

}

export type PassengerBody = Pick<IPassenger, 'firstName' | 'lastName' | 'gender' | 'email'>;
export type PassengerDocument = HydratedDocument<IPassenger>;

const passengerSchema = new mongoose.Schema<IPassenger>({
    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    firstName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, "Invalid email address."],
    },
}, { collection: 'passengers', timestamps: true });

export default mongoose.model<IPassenger>('Passenger', passengerSchema);