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
        "testBookTitle": "#main > div.container.single-post-container > div.col-lg-8.content_detail.p20 > div.content > div > div > p > b",
        "testBookDetails": "#main > div.container.single-post-container > div.col-lg-8.content_detail.p20 > div.content > div > div > div > ul",
        "byjuTitle": "#__next > section > section > div > div.flex-row-l.flex-column.fixed-width-container.flex.flex-grow-1.justify-between.mt2 > div.post_articleMain__1KWsN.mr4-l.mr0.exam-category-main > div.relative.flex.flex-column.w-100 > div.relative.transition-all > div > div.custom-html-style.mb3.ph3.ph0-l.overflow-x-visible.new-html-styles.post-body.article-content.overflow-y-hidden.ph3-3.roboto > h3 > strong > span",
        "byjuDetails": "#__next > section > section > div > div.flex-row-l.flex-column.fixed-width-container.flex.flex-grow-1.justify-between.mt2 > div.post_articleMain__1KWsN.mr4-l.mr0.exam-category-main > div.relative.flex.flex-column.w-100 > div.relative.transition-all > div > div.custom-html-style.mb3.ph3.ph0-l.overflow-x-visible.new-html-styles.post-body.article-content.overflow-y-hidden.ph3-3.roboto > ul",
        "indianExpressHeadings": '#section > div > div.row > div > div > li > strong > a'
        , "indianExpressNewsTypes": '#section > div > div.row > div > div > li > span > a',
        "indianExpressHeadingsLinks": "#section > div > div.row > div > div > li > strong > a"
        , "restOfParagraphsIE": "#pcl-full-content > div > p",
        "introParagraphIE": "#pcl-full-content > p"
        , "writtenByIE": "#written_by1",
        "introDescriptionIE": "#section > div > div:nth-child(1) > div > h2",
        "toiHeadings": "#c_wdt_list_1 > ul > li > span > a",
        "htHeadings": "#dataHolder > div > h3 > a",
        "htTypes": ".actionDiv > div.secName > a",
        "otvHeading": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > a > h5",
        "otvLink": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > a",
        "otvShortDescription": "body > section.main-article > div > div > div.col-lg-9.col-md-8.col-sm-12.col-xs-12.sticky > div > div > p"

    }
}