import userModel from "../models/userModel.js"
import tokenService from 'jsonwebtoken'

const userController = {
    findAll: async (req, res) => {
        try {
            const result = await userModel.find({})
            const user = result.toObject()
            res.status(200).json({
                message: "Meu primeiro servidor " + "Produto 1",
                response: user
            })
        } catch (error) {
            res.status(400).json({
                message: "Não foi possivel inserir o produto"
            })
        }
    },

    insertOne: async (req, res) => {
        try {
            const result = await userModel.create(req.body)
            res.json({
                status: 200,
                response: result
            })
        } catch (error) {
            res.status(400).json({
                message: "Não foi possivel inserir o usuário no banco"
            })
        }
    },

    updateOne: (req, res) => {

    },

    deleteOne: (req, res) => {

    },

    login: async (req, res) => {
        const result = await userModel.findOne({ email: req.body.email, password: req.body.password })
        if (result) {
            try {
                const { __v, __id, ...json } = result.toObject()
                const token = await tokenService.sign(json, process.env.SECRET)
                res.status(200).json({ token: token })
            } catch (error) {
                res.status(400).json({ message: "Credenciais inválidas" })
            }
        } else {
            res.status(400).json({ message: "Credenciais inválidas" })
        }
    }
}

export default userController;
