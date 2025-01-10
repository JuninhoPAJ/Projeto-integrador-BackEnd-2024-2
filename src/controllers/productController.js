import productModel from "../models/productModel.js"

const productController = {
    findAll: async (req, res) => {
        try {
            const result = await productModel.find({})
            const product = result.toObject()
            res.status(200).json({
                message: "Meu primeiro servidor " + "Produto 1",
                response: product
            })
        } catch (error) {
            res.status(400).json({
                message: "Não foi possivel inserir o produto"
            })
        }
    },

    insertOne: async (req, res) => {
        try {
            const result = await productModel.create(req.body)
            const product = result.toObject()
            res.json({
                status: 200,
                response: product
            })
        } catch (error) {
            res.status(400).json({
                message: "Não foi possivel inserir o produto"
            })
        }
    },

    updateOne: (req, res) => {

    },

    deleteOne: (req, res) => {

    }
}

export default productController;
