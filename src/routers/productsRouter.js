import express, { response } from "express";
import productController from "../controllers/productController.js"
const router = express.Router()

router.route('/')

    .get(productController.findAll)
    .post(productController.insertOne)
    .put(productController.updateOne)
    .delete(productController.deleteOne)

export default router;