#!/usr/bin/env node

const opsgenie = require('opsgenie-sdk');

const alias = process.argv[2];
const opsgenie_api_key = process.env.OPSGENIE_API_KEY

if(alias === undefined) {
    console.log('usage: ./delete_alert.js alias')
    process.exit(1)
}

if(opsgenie_api_key === undefined) {
    console.log('Environment variable "OPSGENIE_API_KEY" is undefined')
    process.exit(1)
}

opsgenie.configure({
    api_key: process.env.OPSGENIE_API_KEY
})

const alert_identifier = {
    identifier: alias,
    identifierType: "alias"
};

opsgenie.alertV2.delete(alert_identifier, function (error, alert) {
    if (error) {
        console.log(`WARNING: Failed to request alert deletion with error: ${error.message}`)
    } else {
        console.log(`Sent request to delete alert with alias: ${alias}`)
    }
});
