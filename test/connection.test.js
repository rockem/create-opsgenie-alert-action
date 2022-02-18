const {connectionOptions, OPSGENIE_EU_URL} = require("../src/connection");
const expect = require('chai').expect

describe('Connection options', function () {
  describe('EU url', () => {
    it('should retrieve EU OpsGenie url in options', () => {
      const options = connectionOptions('api-key', 'true');
      expect(options.host).to.equal(OPSGENIE_EU_URL);
    });
  });
});