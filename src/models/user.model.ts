import type { HydratedDocument } from "mongoose";
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
        set: passwordEncrypte
    },



})