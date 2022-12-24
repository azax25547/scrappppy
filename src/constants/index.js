module.exports = {
    "urls": {
        "MATH_URL": "https://numbersapi.p.rapidapi.com/%s/math?json=true",
        "DATE_URL": "https://numbersapi.p.rapidapi.com/%s/%s/date?json=true",
        "RANDOM_URL": "https://numbersapi.p.rapidapi.com/random/%s?min=%s&max=%s&json=true",
        "INDIAN_NEWS_URL": "https://indian-news-live.p.rapidapi.com/news/%s",
        "INDIAN_EXPRESS": "https://indianexpress.com/todays-paper/",
        "TEST_BOOK": "https://testbook.com/current-affairs/current-affairs-today/",
        "BYJU": "https://byjusexamprep.com/daily-gk-update",
        "TIMES_OF_INDIA": "https://timesofindia.indiatimes.com/india",
        "TOI": "https://timesofindia.indiatimes.com",
        "HINDUSTAN_TIMES": "https://www.hindustantimes.com/latest-news",
        "HT": "https://www.hindustantimes.com",
        "OTV": "https://odishatv.in/odisha/"
    },
    "hosts": {
        "numbers": "numbersapi.p.rapidapi.com",
        "indianNews": "indian-news-live.p.rapidapi.com"
    },
    "selectors": {
        //test-book
        "testBookTitle": "#main > div.container.single-post-container > div.col-lg-8.content_detail.p20 > div.content > div > div > p > b",
        "testBookDetails": "#main > div.container.single-post-container > div.col-lg-8.content_detail.p20 > div.content > div > div > div > ul",
        //byju
        "byjuTitle": "#__next > section > section > div > div.flex-row-l.flex-column.fixed-width-container.flex.flex-grow-1.justify-between.mt2 > div.post_articleMain__1KWsN.mr4-l.mr0.exam-category-main > div.relative.flex.flex-column.w-100 > div.relative.transition-all > div > div.custom-html-style.mb3.ph3.ph0-l.overflow-x-visible.new-html-styles.post-body.article-content.overflow-y-hidden.ph3-3.roboto > h3 > strong > span",
        "byjuDetails": "#__next > section > section > div > div.flex-row-l.flex-column.fixed-width-container.flex.flex-grow-1.justify-between.mt2 > div.post_articleMain__1KWsN.mr4-l.mr0.exam-category-main > div.relative.flex.flex-column.w-100 > div.relative.transition-all > div > div.custom-html-style.mb3.ph3.ph0-l.overflow-x-visible.new-html-styles.post-body.article-content.overflow-y-hidden.ph3-3.roboto > ul",
        //ie-all
        "indianExpressHeadings": '#section > div > div > div.leftpanel > div > div.section.ev-meter-content > ul > li > strong > a',
        "indianExpressNewsTypes": '#section > div > div > div.leftpanel > div > div.section.ev-meter-content > ul > li > span > a',
        "indianExpressHeadingsLinks": "#section > div > div > div.leftpanel > div > div.section.ev-meter-content > ul > li > strong > a",
        //ie-one
        "restOfParagraphsIE": "#pcl-full-content > div > p",
        "introParagraphIE": "#pcl-full-content > p",
        "writtenByIE": "#written_by1",
        "introDescriptionIE": "#section > div > div:nth-child(1) > div > h2",
        //toi-all
        "toiHeadings": "#c_wdt_list_1 > ul > li > span > a",
        //ht-all
        "htHeadings": "h3.hdg3 > a",
        // "#topnews > section > div.htImpressionTracking > div.cartHolder.bigCart.track > h3 > a"
        //otv-all
        "otvHeading": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > a > h5",
        "otvLink": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > a",
        "otvShortDescription": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > p",
        //toi-one
        "contextTOI": "#app > div > div.contentwrapper.clearfix > div > div._3nf_c > div._15wZO.innerbody > div.TFt6P > div._1ZNdg > div._3B0JD > div > div.fewcent-95964255 > div._3YYSt.clearfix",
        "writtenByTOI": "#app > div > div.contentwrapper.clearfix > div > div._3nf_c > div._15wZO.innerbody > div.TFt6P > div._36ns3 > div > div.yYIu-.byline",
        //ht-one
        "contextHT": "#dataHolder > div.fullStory.tfStory.current.videoStory > div.storyDetails > div.detail > p",
        "writtenByHT": "#dataHolder > div.fullStory.tfStory.current.videoStory > div.actionDiv.flexElm.topTime > div.secName > a",
        "introParaHT": "#dataHolder > div.fullStory.tfStory.current.videoStory > h2",
        //otv-one
        "writtenByOTV": "#contentsWrapper > div > div.row > div.col-lg-9.col-md-8.col-sm-12.col-xs-12 > div.author-info-custom > ul:nth-child(2) > li:nth-child(1) > a",
        "contextOTV": "#contentsWrapper > div > div.row > div.col-lg-9.col-md-8.col-sm-12.col-xs-12 > div.article-content > p"
    }
}