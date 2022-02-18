function createArrayFrom(tags) {
  return !tags ? [] : tags.split(',').map(tag => {
    return tag.trim();
  })
}

const createAlertRequestFrom = (alertDetails) => {
  const request = {};
  Object.assign(request, alertDetails, {tags: createArrayFrom(alertDetails.tags)});
  return request;
}

module.exports = {
  createAlertRequestFrom
}