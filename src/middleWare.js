import tokenService from 'jsonwebtoken'

const mid = async (req, res, next) => {
    const noAuthRouter = ["/api/user/login", "/about"]
    if (noAuthRouter.includes(req.path) || req.path == '/api/user' && req.method === 'POST') {
        return next()
    }
    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({ message: "Não autorizado" })
    }

    try {
        const result = await tokenService.verify(token, process.env.SECRET);
        if (result) {
            return next()
        }
        throw new Exception("Acesso inválido")

    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

export default mid;