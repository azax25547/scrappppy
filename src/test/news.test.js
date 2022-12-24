const { expect } = require('chai');
const { it } = require('mocha');
const request = require('supertest');
const { app } = require('..');

describe('test Indian Express Api', () => {
    it('should check wrong url', (done) => {
        request(app).get('/v1/api/ca/news/wdas')
            .expect(404)
        done();
    })

    it('should check wrong url contents', (done) => {
        request(app).get('/v1/api/ca/news/wdas')
            .expect(404)
            .end((err, res) => {
                expect(res.body.success).equal(false)
                done();
            })
    })


    it('should check correct url response status', (done) => {
        request(app).get('/v1/api/ca/news/ie')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

    it('should get all the news', (done) => {
        request(app).get('/v1/api/ca/news/ie')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

})


describe('test Hindustan Times Api', () => {


    it('should check correct url response status', (done) => {
        request(app).get('/v1/api/ca/news/ht')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

    it('should get all the news', (done) => {
        request(app).get('/v1/api/ca/news/ht')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

})


describe('test Times of India Api', () => {



    it('should check correct url response status', (done) => {
        request(app).get('/v1/api/ca/news/toi')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

    it('should get all the news', (done) => {
        request(app).get('/v1/api/ca/news/toi')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

})

describe('test OTV Api', () => {


    it('should check correct url response status', (done) => {
        request(app).get('/v1/api/ca/news/otv')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                done();
            })
    })

    it('should get all the news', (done) => {
        request(app).get('/v1/api/ca/news/otv')
            .expect(200)
            .end((err, res) => {
                // console.log(res.body)
                expect(res.body.success).equal(true)
                expect(res.body.data.length).greaterThan(0)
                done();
            })
    })

})


describe('test all single news', () => {

    it('should get indian express news single news content', (done) => {
        request(app).post('/v1/api/ca/news/ie')
            .send({
                "url": "https://indianexpress.com/article/opinion/columns/india-constitution-day-8290256/"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.success).equal(true)
                done();
            })

    })

    it('should get times of India news single news content', (done) => {
        request(app).post('/v1/api/ca/news/toi')
            .send({
                "url": "https://timesofindia.indiatimes.com/india/winter-parliament-session-congress-to-corner-centre-on-inflation-china-interference-in-constitutional-institutions/articleshow/95964255.cms"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.success).equal(true)
                done();
            })

    })


    it('should get hindustan times news single news content', (done) => {
        request(app).post('/v1/api/ca/news/ht')
            .send({
                "url": "https://www.hindustantimes.com/india-news/actor-kamal-hassan-joins-rahul-gandhi-s-bharat-jodo-yatra-in-delhi-101671878557338.html"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.success).equal(true)
                done();
            })
    })


    it('should get otv news single news content', (done) => {
        request(app).post('/v1/api/ca/news/otv')
            .send({
                "url": "https://odishatv.in/news/odisha/bhubaneswar-commercial-court-orders-auction-of-debt-ridden-markfed-office-193245"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.success).equal(true)
                done();
            })

    })


})