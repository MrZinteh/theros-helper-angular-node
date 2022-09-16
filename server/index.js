const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");

const router = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.resolve(__dirname, '../client/dist/theros-helper')));
}
else {
    app.use(express.static(path.resolve(__dirname, '../client/dist/theros-helper')));
}

const jsonParser = bodyParser.json();

app.use(jsonParser);

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack)

    res.status(500).send('Something broke!')
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});