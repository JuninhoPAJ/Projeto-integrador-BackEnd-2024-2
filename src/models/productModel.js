import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {type: String, required: true, length: 200},
    price: {type: Number, required: true},
    description: {type: String, length: 400},
    image: {type: String, default: "https://cdn-icons-png.flaticon.com/512/9696/9696976.png"}
})

export default mongoose.model("Product", Schema)