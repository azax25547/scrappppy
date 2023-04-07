module.exports = (err, req, res, next) => {
    if (err?.response?.status == 404)
        res.status(404).json({
            success: false,
            message: "Content is not available yet at source place. Please try after some time."
        })
    else if (err?.response?.status == 500) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
    else if (err?.code == "ECONNREFUSED") {
        res.status(500).send({
            success: false,
            message: "Backend Server is not Accessible. Please check"
        })

    } else if (err?.code == "ERR_BAD_REQUEST") {
        res.status(500).send({
            success: false,
            message: "Unable to handle request. Please check"
        })
    }

    else {
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
}