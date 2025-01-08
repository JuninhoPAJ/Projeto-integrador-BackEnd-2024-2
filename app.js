import express from "express";
import productRouter from "./src/routers/productsRouter.js"
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/api/product', productRouter)

app.listen(PORT, () => {
    console.log("Seu servidor está rodando na porta:", PORT)
})

