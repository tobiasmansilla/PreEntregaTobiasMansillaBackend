import { Schema, model } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: true,
    },
    last_name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: String,
        trim: true,
        enum: ["user", "admin"],
        default: "user",
    },
    cart: [
        {
            carritos: {
                type: Schema.Types.ObjectId,
                ref: "carritos",
            },
        },
    ],
    pets: [
        {
            pets: {
                type: Schema.Types.ObjectId,
                ref: "pets",
            },
        },
    ],
});

export const userModel = model("user", userSchema);
    