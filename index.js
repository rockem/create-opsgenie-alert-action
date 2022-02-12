const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');


const connectionDetails = {'api_key': core.getInput('api_key')}
if (core.getInput('using_eu_url') === 'true') {
    connectionDetails.host = 'https://api.eu.opsgenie.com'
}
opsgenie.configure(connectionDetails)

const tags_map_from = (tag_string) =>
    !tag_string ? [] : tag_string.split(',').map(tag => tag.trim())


// const allInputs = () => {
//     let inputs = {}
//     for (let [k,v] of Object.entries(process.env)) {
//         if (k.startsWith('INPUT_')) {
//             inputs[k] = v;
//         }
//     }
//     return inputs;
// }

const allInputs = () => {
    return {
        message: core.getInput('message'),
        alias: core.getInput('alias'),
        description: core.getInput('description'),
        priority: core.getInput('priority'),
        tags: core.getInput('tags'),

    }
}

const create_alert_request_from = (inputs) => {
    return {
        message: inputs.message,
        alias: inputs.alias,
        description: inputs.description,
        priority: inputs.priority,
        tags: tags_map_from(inputs.tags)
    }
}

const create_alert_request = create_alert_request_from(allInputs())

console.log(`Creating alert with: ${create_alert_request}`)

opsgenie.alertV2.create(create_alert_request, function (error, alert) {
    if (error) {
        core.setFailed(error.message);
    } else {
        console.log(`Request sent for creating new alert: ${create_alert_request.message}`);
    }
});

