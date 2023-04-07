const { expect } = require('chai');
const { it } = require('mocha');
const request = require('supertest');
const { app } = require('..');

describe('test Indian Express Api', () => {
    it('should check wrong url', (done) => {
        request(app).get('/v1/api/newss/')
            .expect(404)

        done();
    })

    it('should check wrong url contents', (done) => {
        request(app).get('/v1/api/news/')
            .expect(404)
            .end((err, res) => {

                done();
            })
    })


    it('should check correct url response status', (done) => {
        request(app).get('/v1/api/news/today')
            .query({
                "url": "https://indianexpress.com/todays-paper/",
                "source": "ie"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

    it('should get all the news content', (done) => {
        request(app).get('/v1/api/news/content')
            .query({
                "url": "https://indianexpress.com/article/opinion/columns/c-raja-mohan-writes-russia-and-chinas-plan-is-to-divide-and-rule-the-west-8538619/",
                "source": "ie"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

})


describe('test Hindustan Times Api', () => {


    it('should get all the news', (done) => {
        request(app).get('/v1/api/news/today')
            .query({
                "url": "https://www.hindustantimes.com/world-news",
                "source": "ht"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

    it('should get all the news content', (done) => {
        request(app).get('/v1/api/news/content')
            .query({
                "url": "https://www.hindustantimes.com/world-news/baps-hindu-temple-in-canada-defaced-with-anti-india-graffiti-fifth-incident-since-july-2020-no-arrests-made-yet-101680718358151.html",
                "source": "ht"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })


})


describe('test Times of India Api', () => {

    it('should get all the news', (done) => {
        request(app).get('/v1/api/news/today')
            .query({
                "url": "https://timesofindia.indiatimes.com/world",
                "source": "toi"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body.success)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

    it('should get all the news content', (done) => {
        request(app).get('/v1/api/news/content')
            .query({
                "url": "https://timesofindia.indiatimes.com/india/i-see-remote-chances-of-opposition-unity-for-2024-lok-sabha-elections/articleshow/99252786.cms",
                "source": "toi"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

})

describe('test OTV Api', () => {

    it('should get all the news', (done) => {
        request(app).get('/v1/api/news/today')
            .query({
                "url": "https://odishatv.in/odisha",
                "source": "otv"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

    it('should get all the news content', (done) => {
        request(app).get('/v1/api/news/content')
            .query({
                "url": "https://odishatv.in/news/odisha/odisha-cm-naveen-patnaikmeets-nippon-steel-president-in-tokyo-to-discuss-kendrapara-project-200871",
                "source": "otv"
            })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

})