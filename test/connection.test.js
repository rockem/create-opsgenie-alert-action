const {connectionOptions, OPSGENIE_EU_URL} = require("../src/connection");
const expect = require('chai').expect

describe('Connection Options', function() {
    it('should retrieve EU OpsGenie url in options', function() {
        const options = connectionOptions('api-key', 'true');
        expect(options.host).to.equal(OPSGENIE_EU_URL);
    });
});