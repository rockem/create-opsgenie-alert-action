const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');

opsgenie.configure({
    'api_key': core.getInput('api_key')
});

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

opsgenie.alertV2.create(create_alert_request, function (error, alert) {
    if (error) {
        core.setFailed(`ERROR: ${error.message}`);
    } else {
        console.log(`Request sent for creating alert with alias: ${core.getInput('alias')}`);
    }
});

