import type{ HydratedDocument } from "mongoose";
import { mongoose } from '../configs/dbConnection';
import { passwordEncrypte } from "../utils";

export interface IUser {
    username: string;
    password: string;
    email: string;
    isActive: boolean;
    isStaff: boolean;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type UserBody = Pick<IUser, 'username' | 'password' | 'email'> &
    Partial<Pick<IUser, 'isActive' | 'isStaff' | 'isAdmin'>>;

export type UserDocument = HydratedDocument<IUser>;

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: passwordEncrypte,
        select: false
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, "Invalid email address."],
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff: {
        type: Boolean,
        default: false,
        immutable:true
    },

    isAdmin: {
        type: Boolean,
        default: false,
        immutable: true
    }
}, {collection: 'users', timestamps: true});

export default  mongoose.model<IUser>('User', userSchema);