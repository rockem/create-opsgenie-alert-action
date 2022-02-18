const OPSGENIE_EU_URL = 'https://api.eu.opsgenie.com';

const createConnectionOptions = (api_key, using_eu_url) => {
  const connectionDetails = {'api_key': api_key}
  if (using_eu_url === 'true') {
    connectionDetails.host = OPSGENIE_EU_URL;
  }
  return connectionDetails;
}

module.exports = {
  connectionOptions: createConnectionOptions,
  OPSGENIE_EU_URL
}