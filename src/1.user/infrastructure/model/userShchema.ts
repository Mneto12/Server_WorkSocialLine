import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
            unique: true,
        },
        birthDate: {
            type: String,
        },
        gender: {
            type: String,
        },
    }
);

const UserModel = model("users", UserSchema);

export default UserModel;