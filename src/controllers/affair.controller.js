const constants = require('../constants');
const { dateOrdinal, getScrappedData } = require('../utils');

let responseJSON = {
    data: {},
    success: false,
    type: 'object'
}

module.exports = {
    getTopTenGeneralAffairsService: async (req, res, next) => {
        const source = req.params.source;


        let title = [];
        let details = [];


        switch (source) {
            case "testbook":
                try {
                    const $ = await getScrappedData(constants.urls.TEST_BOOK);
                    $(constants.selectors.testBookTitle).each((i, el) => {
                        title.push($(el).text());
                    })
                    $(constants.selectors.testBookDetails).each((i, el) => {
                        details.push($(el).text());
                    })
                    let data = []
                    title.forEach((el, i) => data.push({ title: el, details: details[i] }))
                    return res.status(200).json({
                        data,
                        success: true,
                        type: 'object'
                    })
                } catch (err) {
                    next(err);
                }
                break;

            case "byju":
                try {
                    const byjuDate = `${dateOrdinal(new Date().getDate())}-${new Date().toLocaleString('default', { month: 'long' })}-${new Date().getFullYear()}-i`;
                    const $ = await getScrappedData(`${constants.urls.BYJU}-${byjuDate}`)

                    $(constants.selectors.byjuTitle).each((i, el) => {
                        title.push($(el).text());
                    })

                    $(constants.selectors.byjuDetails).each((i, el) =>
                        details.push($(el).text()))
                    console.log(title)
                    let data = []
                    title.forEach((el, i) => data.push({ title: el, details: details[i] }))
                    return res.status(200).json({
                        data,
                        success: true,
                        type: 'object'
                    })

                } catch (err) {
                    next(err)
                }
                break;

            default: res.status(200).json(responseJSON);
        }

    },
    getHighLightsFromNewsMedias: async (req, res, next) => {
        const newsPaper = req.params.name;

        const page = parseInt(req.query.page);

        switch (newsPaper) {

            case "ie":
                try {

                    let indianExpressHeadings = [];
                    let indianExpressHeadingsLinks = [];
                    let indianExpressNewsTypes = [];
                    const $ = await getScrappedData(constants.urls.INDIAN_EXPRESS);

                    // check for premium types

                    $(constants.selectors.indianExpressHeadings).each((i, el) => indianExpressHeadings.push($(el).text()))
                    $(constants.selectors.indianExpressNewsTypes).each((i, el) => indianExpressNewsTypes.push($(el).text()))
                    $(constants.selectors.indianExpressHeadings).each((i, el) => indianExpressHeadingsLinks.push($(el).attr('href')))

                    let results = [];
                    indianExpressHeadings.forEach((el, i) => {
                        let x = {
                            heading: indianExpressHeadings[i],
                            link: indianExpressHeadingsLinks[i],
                            type: indianExpressNewsTypes[i]
                        }

                        results.push(x)
                    })

                    responseJSON.data = results.filter((item) => item.type !== "Eye");
                    responseJSON.success = true;

                    res.status(200).json(responseJSON)

                } catch (err) {
                    next(err)
                }
                break;

            case "toi":
                try {
                    let toiHeadings = [];
                    let toiLinks = [];

                    let $ = await getScrappedData(constants.urls.TIMES_OF_INDIA);

                    $(constants.selectors.toiHeadings).each((i, el) => {
                        toiHeadings.push($(el).text())
                        toiLinks.push($(el).attr('href'))
                    })

                    if (page) {
                        toiHeadings = [];
                        toiLinks = [];

                        $ = await getScrappedData(`${constants.urls.TIMES_OF_INDIA}/${page}`);

                        $(constants.selectors.toiHeadings).each((i, el) => {
                            toiHeadings.push($(el).text())
                            toiLinks.push($(el).attr('href'))
                        })
                    }

                    let results = [];
                    toiHeadings.forEach((el, i) => {
                        let x = {
                            heading: toiHeadings[i],
                            link: `${constants.urls.TOI}${toiLinks[i]}`
                        }
                        results.push(x);
                    })
                    responseJSON.data = results;
                    responseJSON.success = true;

                    res.status(200).send(responseJSON);
                } catch (err) {
                    next(err);
                }
                break;

            case "ht":
                try {
                    let htHeadings = [];
                    let htLinks = [];

                    let $ = await getScrappedData(constants.urls.HINDUSTAN_TIMES);

                    $(constants.selectors.htHeadings).each((i, el) => {
                        htHeadings.push($(el).text())
                        htLinks.push($(el).attr('href'))
                    })


                    if (page) {
                        htHeadings = [];
                        htLinks = [];

                        $ = await getScrappedData(`${constants.urls.HINDUSTAN_TIMES}/page-${page}`);

                        $(constants.selectors.htHeadings).each((i, el) => {
                            htHeadings.push($(el).text())
                            htLinks.push($(el).attr('href'))

                        })

                    }


                    let results = [];
                    htHeadings.forEach((el, i) => {
                        let x = {
                            heading: htHeadings[i],
                            link: `${constants.urls.HT}${htLinks[i]}`,
                        }
                        results.push(x);
                    })

                    responseJSON.data = results;
                    responseJSON.success = true;

                    return res.status(200).json(responseJSON)

                } catch (err) {
                    next(err)
                }
                break;

            case "otv":
                try {
                    let otvHeadings = [];
                    let otvLinks = [];
                    let otvShortDescription = [];

                    let $ = await getScrappedData(constants.urls.OTV);

                    $(constants.selectors.otvHeading).each((i, el) => {
                        if (!$(el).text().includes("Latest Odisha Breaking News Updates"))
                            otvHeadings.push($(el).text())
                    })

                    $(constants.selectors.otvLink).each((i, el) => {
                        if (!$(el).attr('href').includes("latest-update"))
                            otvLinks.push($(el).attr('href'))
                    })

                    $(constants.selectors.otvShortDescription).each((i, el) => {
                        if (!$(el).text().includes("OdishaTV is the best"))
                            otvShortDescription.push($(el).text())
                    })



                    if (page) {
                        $ = await getScrappedData(`${constants.urls.OTV}/${page}`);

                        otvHeadings = []
                        otvLinks = []
                        otvShortDescription = []

                        $(constants.selectors.otvHeading).each((i, el) => {
                            if (!$(el).text().includes("Latest Odisha Breaking News Updates"))
                                otvHeadings.push($(el).text())
                        })

                        $(constants.selectors.otvLink).each((i, el) => {
                            if (!$(el).attr('href').includes("latest-update"))
                                otvLinks.push($(el).attr('href'))
                        })

                        $(constants.selectors.otvShortDescription).each((i, el) => {
                            if (!$(el).text().includes("OdishaTV is the best"))
                                otvShortDescription.push($(el).text())
                        })
                    }


                    let results = [];
                    otvHeadings.forEach((el, i) => {
                        let x = {
                            heading: otvHeadings[i],
                            link: otvLinks[i],
                            shortDescription: otvShortDescription[i]
                        }
                        results.push(x);
                    })

                    responseJSON.data = results;
                    responseJSON.success = true;

                    return res.status(200).json(responseJSON)

                } catch (err) {
                    next(err)
                }
                break;

            default: return res.status(200).json(responseJSON)
        }

    },
    getNewsDetailsFromNewsMedia: async (req, res, next) => {
        const { url } = req.body;
        const newsPaper = req.params.name;

        switch (newsPaper) {
            case "ie":
                try {
                    let introPara = [];
                    let restPara = [];

                    const $ = await getScrappedData(url);

                    introPara.push($(constants.selectors.introParagraphIE).text());
                    $(constants.selectors.restOfParagraphsIE).each((i, el) => restPara.push($(el).text()));

                    responseJSON.data.context = introPara.concat(restPara).join("").trim();
                    responseJSON.data.writtenBy = $(constants.selectors.writtenByIE).text();
                    responseJSON.data.introDescription = $(constants.selectors.introDescriptionIE).text()
                    responseJSON.success = true;

                    res.status(200).json(responseJSON);

                } catch (err) {
                    next(err);
                }
                console.log();
                break;
            case "toi":
                try {
                    const $ = await getScrappedData(url);

                    responseJSON.data.context = $(constants.selectors.contextTOI).text();
                    responseJSON.data.writtenBy = $(constants.selectors.writtenByTOI).text().split("/")[0].trim()
                    responseJSON.success = responseJSON.data.context && responseJSON.data.writtenBy ? true : false;

                    return res.status(200).send(responseJSON);
                } catch (err) {
                    next(err);
                }
                break;

            case "ht":
                try {
                    const $ = await getScrappedData(url);

                    const htWrittenBy = $(constants.selectors.writtenByHT).text()
                    const htIntroDescription = $(constants.selectors.introParaHT).text()

                    let htContext = []
                    $(constants.selectors.contextHT).each((i, el) => htContext.push($(el).text()))

                    responseJSON.data.context = htContext.join("").trim();
                    responseJSON.data.writtenBy = htWrittenBy;
                    responseJSON.data.introDescription = htIntroDescription;
                    responseJSON.success = htContext && htWrittenBy ? true : false;

                    return res.status(200).send(responseJSON);
                } catch (err) {
                    next(err);
                }
                break;

            case "otv":
                try {
                    const $ = await getScrappedData(url);

                    const otvWrittenBy = $(constants.selectors.writtenByOTV).text()

                    let otvContext = []
                    $(constants.selectors.contextOTV).each((i, el) => otvContext.push($(el).text()))
                    responseJSON.data.context = otvContext.join("").trim();
                    responseJSON.data.writtenBy = otvWrittenBy;
                    responseJSON.success = otvContext && otvWrittenBy ? true : false;

                    return res.status(200).send(responseJSON);
                } catch (err) {
                    next(err);
                }
                break;

            default: res.status().json(responseJSON)
        }
    }
}

// 
