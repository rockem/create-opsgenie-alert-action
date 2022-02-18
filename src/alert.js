

const createAlertRequestFrom = (alertDetails) => {
  Object.assign(alertDetails, {tags: [alertDetails.tags]});
  return alertDetails;
}

module.exports = {
  createAlertRequestFrom
}