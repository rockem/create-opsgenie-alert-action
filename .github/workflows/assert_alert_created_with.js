#!/usr/bin/env node

const opsgenie = require("opsgenie-sdk");
const expect = require("chai").expect;

const request_id = process.argv[2];
const message = process.argv[3];
const alias = process.argv[4];
const description = process.argv[5];
const priority = process.argv[6];
const tag = process.argv[7];
const source = process.argv[8];

opsgenie.configure({
  api_key: process.env.OPSGENIE_API_KEY,
});

const get_alert_identifier = (alert_id) => {
  return {
    identifier: alert_id,
    identifierType: "alert_id",
  };
};

opsgenie.alertV2.getRequestStatus(request_id, function (_, status) {
  if (status.data.success !== true) {
    throw new Error("Alert wasn't (yet?) created");
  }
  opsgenie.alertV2.get(
    get_alert_identifier(status.data.alertId),
    function (error, alert) {
      if (error) {
        throw new Error(error.message);
      } else {
        expect(alert.data.message).to.equal(message);
        expect(alert.data.description).to.equal(description);
        expect(alert.data.alias).to.equal(alias);
        expect(alert.data.priority).to.equal(priority);
        expect(alert.data.tags).to.include(tag);
        expect(alert.data.source).to.equal(source);
      }
    },
  );
});
