const app = require('../server/server.js');
const axios = require('axios');
global.$ = require('jquery');
var mocha = require('mocha');


describe('sample get request', () => {
  test('server has urls', () => {
    const callback = (data) => {
      try {

        expect(data.length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    axios({
      type: 'GET',
      url: '/api/product/1',
      success: (data) => {
        callback(data);
      }
    });
  });
});

describe('sample get request with jquery ', () => {
  test('server has urls', () => {
    const callback = (data) => {
      try {
        expect(data.length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    $.get('/api/product/1', (data) => callback(data));
  });
});