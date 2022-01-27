const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');


if (core.getInput('opsgenie_eu')) {
    opsgenie.configure({
        'api_key': core.getInput('api_key'),
        'host': 'https://api.eu.opsgenie.com',
    });
} else {
    opsgenie.configure({
        'api_key': core.getInput('api_key'),
    });
}


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

console.log(`Creating alert with: ${create_alert_request}`)

opsgenie.alertV2.create(create_alert_request, function (error, alert) {
    if (error) {
        core.setFailed(`ERROR: ${error.message}`);
    } else {
        console.log(`Request sent for creating new alert: ${create_alert_request.message}`);
    }
});

