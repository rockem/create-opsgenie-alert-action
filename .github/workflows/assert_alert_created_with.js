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

const compare_optional_str = (actual, expected) => {
  if (expected) {
    expect(actual).to.equal(expected);
  }
};

function assert_created_alert(alert) {
  expect(alert.data.message).to.equal(message);
  compare_optional_str(alert.data.description, description);
  compare_optional_str(alert.data.alias, alias);
  compare_optional_str(alert.data.priority, priority);
  if (tag) {
    expect(alert.data.tags).to.include(tag);
  }
  compare_optional_str(alert.data.source, source);
}

opsgenie.alertV2.getRequestStatus(request_id, function (_, status) {
  if (!status.data.success) {
    throw new Error("Alert wasn't (yet?) created");
  }
  opsgenie.alertV2.get(
    get_alert_identifier(status.data.alertId),
    function (error, alert) {
      if (error) {
        throw new Error(error.message);
      } else {
        assert_created_alert(alert);
      }
    },
  );
});
