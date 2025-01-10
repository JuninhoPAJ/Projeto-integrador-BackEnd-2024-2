import express from "express";
import productRouter from "./src/routers/productsRouter.js"
import userRouter from "./src/routers/userRouter.js"
import mongoose from "mongoose";
import dotenv from 'dotenv'
import mid from "./src/middleWare.js"

dotenv.config()
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
const app = express();

app.use(express.json())
app.use(mid)
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)


app.listen(process.env.PORT, () => {
    console.log("Seu servidor está rodando na porta:", process.env.PORT)
})

