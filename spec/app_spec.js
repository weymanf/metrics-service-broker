require('./spec_helper');

describe('App', () => {
  describe('GET /v2/catalog', () => {
    let response, request, app;

    beforeEach.async(async() => {
      const appThunk = require('../service_broker');
      app = appThunk();
      request = require('supertest');
      response = await request(app).get('/v2/catalog');
    });

    it('returns a timestamp', () => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual({});
    });
  });
});