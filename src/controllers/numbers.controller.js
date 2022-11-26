const util = require('util');
const constants = require('../constants');
const { getOptions } = require("../utils")
const fetch = require('node-fetch');

module.exports = {
    getMathService: async (req, res) => {
        const number = req.params.number;
        const fetch_url = util.format(constants.urls.MATH_URL, number);
        try {
            const response = await fetch(
                fetch_url,
                getOptions("get", constants.hosts.numbers)
            );
            const json = await response.json();
            return res.status(200).send(json);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getDateService: async (req, res) => {
        const query = req.query
        const fetch_url = util.format(constants.urls.DATE_URL, query.month, query.date)
        // res.send(fetch_url)
        try {
            const response = await fetch(
                fetch_url,
                getOptions("get", constants.hosts.numbers)
            );
            const json = await response.json();
            return res.status(200).send(json);
        } catch (err) {
            return res.status(500).send(err);
        }
    },
    getTriviaService: async (req, res) => {
        const query = req.query;
        const fetch_url = util.format(constants.urls.RANDOM_URL, query.type, query.min, query.max);

        try {
            const response = await fetch(
                fetch_url,
                getOptions("get", constants.hosts.numbers)
            );
            const json = await response.json();
            return res.status(200).send(json);
        } catch (err) {
            return res.status(500).send(err);
        }
    },
    getStatusService: (req, res) => {
        res.send("Hello There")
    }
};

