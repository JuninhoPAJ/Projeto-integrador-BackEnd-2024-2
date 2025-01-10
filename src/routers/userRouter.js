import express, { response } from "express";
import userController from "../controllers/userController.js"
const router = express.Router()

router.route('/')

    .get(userController.findAll)
    .post(userController.insertOne)
    .put(userController.updateOne)
    .delete(userController.deleteOne)

router.route('/login')

    .post(userController.login)

export default router;