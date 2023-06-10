const axios = require('axios');

class ApiController {
    static async listarProdutos(req, res, next) {
        try {
            const data = {
                tipo: "consulta",
                resultado: "lista",
                descricao: req.body.descricao
            }
            const auth = {
                username: 'user',
                password: 'password'
            }
            const response = await axios.post('http://192.168.1.240:84/RetrofitExample/public/consulta?cnpj=07744784000101', data, {auth});
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).send(`Erro: ${err}`);
        }
    }
}

module.exports = ApiController;