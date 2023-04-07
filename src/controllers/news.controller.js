const axios = require('axios');
let successResponse = {
    data: {},
}
module.exports = {
    getNewsServiceStatus: async (req, res, next) => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/")
            successResponse.data = response.data;
            successResponse.success = true;
            return res.status(200).send(successResponse);
        } catch (err) {
            next(err);
        }
    },
    getTodayNews: async (req, res, next) => {
        const { url, source } = req.query || "";
        try {
            const response = await axios.post("http://127.0.0.1:8000/news",
                {
                    url,
                    source
                })
            if (response.status === 204)
                return res.status(204).json({
                    success: false,
                    message: "No Content"
                })
            successResponse.data = response.data;
            successResponse.success = true;
            return res.status(200).send(successResponse);
        } catch (err) {
            next(err);
        }
    },
    getNewsContent: async (req, res, next) => {
        const { url, source } = req.query || "";
        try {
            const response = await axios.post('http://127.0.0.1:8000/newsContent', {
                url, source
            })
            if (response.status === 204)
                return res.status(204).json({
                    success: false,
                    message: "No Content"
                })
            successResponse.data = response.data;
            // successResponse.data.success = true;
            return res.status(200).send(successResponse);
        } catch (err) {
            next(err);
        }
    }
}