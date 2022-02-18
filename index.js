const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');
const {connectionOptions} = require("./src/connection");

opsgenie.configure(connectionOptions(core.getInput('using_eu_url')))

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
    tags: inputTags()
}

console.log(`Creating alert with: ${JSON.stringify(create_alert_request)}`)

opsgenie.alertV2.create(create_alert_request, function (error, alert) {
    if (error) {
        core.setFailed(error.message);
    } else {
        console.log(`Request sent for creating new alert: ${create_alert_request.message}`);
    }
});

