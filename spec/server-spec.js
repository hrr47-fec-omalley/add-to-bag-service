const mongoose = require('mongoose');
var request = require('request');
var expect = require('chai').expect;

describe('Persistent Node Server', function() {
  var db;
  beforeEach(function(done) {
    db = mongoose.connect('mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority');

    var tablename = 'product';
    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    db.findOne('product ' + tablename, done);
  });

  afterEach(function() {
    db.end();
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
    var queryString = '';
    var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].text).to.equal('Men like you can never change!');
        expect(messageLog[0].roomname).to.equal('main');
        done();
      });
    });
  });
});

// const seed = require('../database/dataGenerator.js');
// const data = require('../database/data.js');

// test('creates a unique object', () => {
//   const result1 = seed.createRandomObj(data.names, data.descriptions, data.prices, data.photos);
//   const result2 = seed.createRandomObj(data.names, data.descriptions, data.prices, data.photos);
//   expect(result1).not.toBe(result2);
// });