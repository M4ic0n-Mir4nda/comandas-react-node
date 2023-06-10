const express = require('express');
const cors = require('cors')
const api = require('./apiRoutes');

const routes = app => {
    app.use(express.json());
    app.use(cors({ origin: "*" }))
    app.use('/produtos', api);
}

module.exports = routes;