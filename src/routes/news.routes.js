const { getNewsServiceStatus, getTodayNews, getNewsContent } = require('../controllers/news.controller');

const newsRouter = require('express').Router();

newsRouter.get("/", getNewsServiceStatus);

newsRouter.get("/today", getTodayNews);

newsRouter.get('/content', getNewsContent);

module.exports = newsRouter