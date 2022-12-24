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
                    title.map((el, i) => data.push({ title: el, details: details[i] }))
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
                    title.map((el, i) => data.push({ title: el, details: details[i] }))
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
        const limit = parseInt(req.query.limit);

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
                    indianExpressHeadings.map((el, i) => {
                        let x = {
                            heading: indianExpressHeadings[i],
                            link: indianExpressHeadingsLinks[i],
                            type: indianExpressNewsTypes[i]
                        }

                        results.push(x)
                    })
                    // const paginatedResult = paginate(page, limit, results);
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
                    toiHeadings.map((el, i) => {
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

                    console.log(htHeadings.length)
                    console.log(htLinks.length);

                    let results = [];
                    htHeadings.map((el, i) => {
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
                        otvHeadings.push($(el).text())
                    })

                    $(constants.selectors.otvLink).each((i, el) => {
                        otvLinks.push($(el).attr('href'))
                    })

                    $(constants.selectors.otvShortDescription).each((i, el) => {
                        otvShortDescription.push($(el).text())
                    })

                    if (page) {
                        $ = await getScrappedData(`${constants.urls.OTV}/${page}`);

                        otvHeadings = [];
                        otvLinks = [];
                        otvShortDescription = [];

                        $(constants.selectors.otvHeading).each((i, el) => {
                            otvHeadings.push($(el).text())
                        })

                        $(constants.selectors.otvLink).each((i, el) => {
                            otvLinks.push($(el).attr('href'))
                        })

                        $(constants.selectors.otvShortDescription).each((i, el) => {
                            otvShortDescription.push($(el).text())
                        })
                    }

                    let results = [];
                    otvHeadings.map((el, i) => {
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

                    $(constants.selectors.restOfParagraphsIE).each((i, el) => restPara.push($(el).text()));
                    introPara.push($(constants.selectors.introParagraphIE).text());

                    responseJSON.data.context = introPara.concat(restPara);

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

                    const toiBody = $('#app > div > div.contentwrapper.clearfix > div > div._3nf_c > div._15wZO.innerbody > div.TFt6P > div._1ZNdg > div._3B0JD > div > div.fewcent-95964255 > div._3YYSt.clearfix').text()

                    const toiWrittenBy = $('#app > div > div.contentwrapper.clearfix > div > div._3nf_c > div._15wZO.innerbody > div.TFt6P > div._36ns3 > div > div.yYIu-.byline').text()

                    responseJSON.data.context = toiBody;
                    responseJSON.data.writtenBy = toiWrittenBy.split("/")[0].trim()
                    const success = toiBody && toiWrittenBy ? true : false;

                    responseJSON.success = success;


                    return res.status(200).send(responseJSON);
                } catch (err) {
                    next(err);
                }
                break;

            case "ht":
                try {
                    const $ = await getScrappedData(url);

                    const htTypeE = '#dataHolder > div.fullStory.tfStory.current.videoStory > div.actionDiv.flexElm.topTime > div.secName > a'
                    const htBodyE = "#dataHolder > div.fullStory.tfStory.current.videoStory > div.storyDetails"



                } catch (err) {
                    next(err);
                }
                break;

            default: res.status().json(responseJSON)
        }
    }
}

// 
