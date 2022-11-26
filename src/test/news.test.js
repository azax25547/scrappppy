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

    it('should check correct url response status', (done) => {
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

    it('should check correct url response status', (done) => {
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

    it('should check correct url response status', (done) => {
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

    it('should check correct url response status', (done) => {
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