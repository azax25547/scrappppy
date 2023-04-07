const express = require('express');
const { affairRouter } = require('./routes/affairs.route');
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const { numberRouter } = require('./routes/number.routes');
const morgan = require('morgan');
const newsRouter = require('./routes/news.routes');

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

app.use('/v1/api/news', newsRouter);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})


module.exports = { app };