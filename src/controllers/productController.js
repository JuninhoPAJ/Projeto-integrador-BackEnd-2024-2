import productModel from "../models/productModel.js"

const productController = {
    findAll: (req, res) => {
        res.status(200).json({
            message: "Meu primeiro servidor " + "Produto 1",
            response: {
                name: "Smartphone 1",
                price: 3000,
                description: "LOREM IPSUM",
                code: "2",
                image: ""
            }
        })
    },

    insertOne: (req, res) => {
        (req, res) => {
            const product = req.body
            res.json({
                status: 200,
                response: product
            })
        }
    },

    updateOne: (req, res) => {

    },

    deleteOne: (req, res) => {

    }
}

export default productController;
