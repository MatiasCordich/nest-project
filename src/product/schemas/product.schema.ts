import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, default: "No hay descripcion"},
    price: { type: Number, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
})