const express = require('express');
const routes = require('./src/routes');
const app = express();
const port = process.env.PORT || 5000;

routes(app);

app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`);
})