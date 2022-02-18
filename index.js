const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');
const {connectionOptions} = require("./src/connection");
const {createAlertRequestFrom} = require("./src/alert");

opsgenie.configure(
  connectionOptions(core.getInput('api_key'), core.getInput('using_eu_url')))

const inputTags = () => {
    const tags = core.getInput('tags');
    return !tags ? [] : tags.split(',').map(tag => {
        return tag.trim()
    })
}

const create_alert_request = {
    message: core.getInput('message'),
    alias: core.getInput('alias'),
    description: core.getInput('description'),
    priority: core.getInput('priority'),
    tags: [core.getInput('tags')]
}

const alertRequest = createAlertRequestFrom(create_alert_request);

console.log(`Creating alert with: ${JSON.stringify(alertRequest)}`)

opsgenie.alertV2.create(alertRequest, function (error, alert) {
    if (error) {
        core.setFailed(error.message);
    } else {
        console.log(`Request sent for creating new alert: ${alertRequest.message}`);
    }
});

