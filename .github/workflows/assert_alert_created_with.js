#!/usr/bin/env node

const opsgenie = require('opsgenie-sdk');
const expect = require('chai').expect

const alias = process.argv[2];
const message = process.argv[3];

opsgenie.configure({
    api_key: process.env.OPSGENIE_API_KEY
})

const get_alert_identifier = {
    identifier: alias,
    identifierType: "alias"
};

opsgenie.alertV2.get(get_alert_identifier, function (error, alert) {
    if (error) {
        throw new Error(error.message);
    } else {
        expect(alert.data.message).to.equal(message);
    }
});