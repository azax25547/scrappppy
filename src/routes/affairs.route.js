const { getTopTenGeneralAffairsService, getHighLightsFromNewsMedias, getNewsDetailsFromNewsMedia } = require('../controllers/affair.controller');

const affairRouter = require('express').Router();

affairRouter.get("/top10/:source", getTopTenGeneralAffairsService);

affairRouter.get("/news/:name", getHighLightsFromNewsMedias);

affairRouter.post("/news/:name", getNewsDetailsFromNewsMedia);

module.exports = {
    affairRouter
}