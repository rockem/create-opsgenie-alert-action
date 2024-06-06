const createAlertRequestFrom = (alertDetails) => {
  const request = {};

  Object.assign(request, alertDetails, {
    tags: createArrayFrom(alertDetails.tags),
    responders: createArrayFrom(alertDetails.responders).map(
      createResponderObjFrom,
    ),
  });

  return withoutEmptyProperties(request);
};

function createArrayFrom(tags) {
  return !tags
    ? []
    : tags.split(",").map((tag) => {
        return tag.trim();
      });
}

function createResponderObjFrom(responderStr) {
  const parts = responderStr.split(":");
  return { [parts[0]]: parts[1], type: parts[2] };
}

function withoutEmptyProperties(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ""));
}

module.exports = {
  createAlertRequestFrom,
};
