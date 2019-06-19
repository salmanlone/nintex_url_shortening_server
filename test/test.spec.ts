// process.env.NODE_ENV === 'test';

// import App from '../src/app';
// import { connect } from 'net';
// let chai = require('chai');
// let should = chai.should();
// let chaiHttp = require('chai-http');

// const expect = require('chai').expect;
// const request = require('supertest');

// import conn from './../src/db/index';

// chai.use(chaiHttp);

const expect = require('chai').expect;
const request = require('supertest');
import app from '../src/app';
import conn from './../src/db/index';


describe('Get 200 from http call', function () {

    before((done) => {
        console.log('before');
        conn.Connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    after((done) => {
        conn.Close()
            .then(() => done())
            .catch((err) => done(err));
    });

    let server = new app().GetServer();

    // it('OK, getting notes has no notes', (done) => {
    //     request(server).get('/')
    //         .then((res) => {
    //             const body = res.body;
    //             res.to.have.status(200);
    //             expect(body.length).to.equal(0);
    //             done();
    //         })
    //         .catch((err) => done(err));
    // });

    // it('it should GET 200 response from http call', function (done) {
    //     chai.request(server)
    //         .get('/')
    //         .end((err, res) => {
    //             const body = res.body;
    //             console.log(body);
    //             res.should.have.status(200);
    //             done();
    //         });
    // });

    // it('it should GET record from database', function (done) {
    //     request(server)
    //         .get('/item/:code')
    //         .then((err, res) => {
    //             const body = res.body;
    //             console.log(body);
    //             expect(body).to.have.property('urlCode');
    //             done();
    //         });
    // });
});
