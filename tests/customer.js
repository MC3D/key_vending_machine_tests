const expect = require('chai').expect;
const request = require('supertest');
const app = require('./../app');
const Item = require('./../models/item');

describe('customer tests', function(){
  beforeEach((done) => {
    Item.insertMany([
      {description: 'Oreos', cost: 100 , quantity: 10},
      {description: 'Rice Crispy Treats', cost: 100 , quantity: 10},
      {description: 'Milky Way', cost: 100 , quantity: 10},
      {description: 'Cheetos', cost: 100 , quantity: 10},
      {description: 'Peanut M&M’s', cost: 100 , quantity: 10}
    ]).then(done());
  });

  afterEach((done) => {
    Item.deleteMany({}).then(done());
  });

  it('a customer should be able to get a list of the current items, their costs, and quantities of those items', (done) => {
    request(app)
      .get('/api/customer/items')
      .expect(200)
      .expect((res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.data[0]).should.be.a('object');
        expect(res.body.data[0].description).should.be.a('string');
        expect(res.body.data[0].cost).should.be.a('number');
        expect(res.body.data[0].quantity).should.be.a('number');
      }).end(done());
  });
});
