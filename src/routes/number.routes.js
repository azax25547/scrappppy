const { getMathService, getDateService, getTriviaService } = require('../controllers/numbers.controller')

const numberRouter = require('express').Router()

numberRouter.get('/stat', (req, res) => {
    res.status(200).json({ "status": true })
})
numberRouter.get('/math/:number', getMathService);
numberRouter.get('/date', getDateService);
numberRouter.get('/random', getTriviaService)


module.exports = { numberRouter };