import { Schema, model } from "mongoose";

const petSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    image: { type: String, required: true },
});

export const petModel = model("pet", petSchema)
