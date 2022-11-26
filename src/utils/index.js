require("dotenv").config()
const cheerio = require('cheerio');
const axios = require('axios');


// console.log(process.env.API_KEY)
//utils
module.exports = {

    getOptions: (method, host) => ({
        method: method.toUpperCase(),
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': host
        }
    }),

    dateOrdinal(d) {
        return d + (31 == d || 21 == d || 1 == d ? "st" : 22 == d || 2 == d ? "nd" : 23 == d || 3 == d ? "rd" : "th")
    },

    paginate(page, limit, dataFromServer) {
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        const pageDetails = {};
        if (!dataFromServer)
            return false
        else {

            if (endIndex < dataFromServer.length) {
                pageDetails.next = {
                    page: page + 1,
                    limit
                }
            }

            if (startIndex > 0)
                pageDetails.previous = {
                    page: page - 1,
                    limit
                }
            pageDetails.results = dataFromServer.splice(startIndex, limit);
            return pageDetails;
        }
    },
    async getScrappedData(url) {
        const response = await axios.get(url);
        const htmlBody = await response.data;
        return cheerio.load(htmlBody);
    }

}

