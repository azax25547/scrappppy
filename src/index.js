const express = require('express');
const { affairRouter } = require('./routes/affairs.route');
require('dotenv').config();
const cors = require('cors');

const { numberRouter } = require('./routes/number.routes');
const morgan = require('morgan');

const app = express()
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");

app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())

app.get('/stat', (req, res) => {
    res.status(200).json({ "status": true })
})
app.use('/v1/api/numbers', numberRouter);
app.use('/v1/api/ca', affairRouter);

app.use((err, req, res, next) => {
    if (err?.response?.status == 404)
        res.status(404).json({
            status: false,
            message: "Content is not available yet at source place. Please try after some time."
        })
    else if (err?.response?.status == 500) {
        res.status(500).send({
            status: false,
            message: err.message
        })

    } else {
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


module.exports = { app };