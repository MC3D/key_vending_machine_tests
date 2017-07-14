const expect = require('chai').expect;
const request = require('supertest');
const app = require('./../app');

describe("sanity test", () => {
  it("should run test", () => {
    expect(1).to.not.equal(2);
  });
});
