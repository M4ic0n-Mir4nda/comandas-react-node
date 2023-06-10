const { Router } = require('express');
const ApiController = require('../controllers/ApiController');
const router = Router();

router
    .post('/', ApiController.listarProdutos);

module.exports = router;