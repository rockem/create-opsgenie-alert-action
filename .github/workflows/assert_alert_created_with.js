#!/usr/bin/env node

const opsgenie = require("opsgenie-sdk");
const expect = require("chai").expect;

const message = process.argv[2];
const alias = process.argv[3];
const description = process.argv[4];
const priority = process.argv[5];
const tag = process.argv[6];
const source = process.argv[7];

opsgenie.configure({
  api_key: process.env.OPSGENIE_API_KEY,
});

const get_alert_identifier = {
  identifier: alias,
  identifierType: "alias",
};

opsgenie.alertV2.get(get_alert_identifier, function (error, alert) {
  if (error) {
    throw new Error(error.message);
  } else {
    expect(alert.data.message).to.equal(message);
    expect(alert.data.description).to.equal(description);
    expect(alert.data.priority).to.equal(priority);
    expect(alert.data.tags).to.include(tag);
    expect(alert.data.source).to.equal(source);
  }
});
