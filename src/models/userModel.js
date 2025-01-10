import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: { type: String, required: true, length: 200 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, length: 400 },
    cpf: { type: String, required: true }
})

export default mongoose.model("User", Schema)