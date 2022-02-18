const core = require("@actions/core");


const createConnectionOptions = (using_eu_url) => {
  const connectionDetails = {'api_key': core.getInput('api_key')}
  if (core.getInput('using_eu_url') === 'true') {
    connectionDetails.host = 'https://api.eu.opsgenie.com'
  }
  return connectionDetails;
}

module.exports = {
  connectionOptions: createConnectionOptions
}