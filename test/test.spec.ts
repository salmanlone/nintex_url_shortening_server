import { expect } from 'chai';
var server = require('../src/index');

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);


describe('Initial Test', function () {
    describe('Get 200 from http call', function () {

        it('it should GET 200 response from http call', function (done)  {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                      res.should.have.status(200);
                  done();
                });
          });
    });
});