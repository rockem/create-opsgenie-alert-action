function createArrayFrom(tags) {
  return !tags
    ? []
    : tags.split(",").map((tag) => {
        return tag.trim();
      });
}

function withoutEmptyProperties(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ""));
}

const createAlertRequestFrom = (alertDetails) => {
  const request = {};
  Object.assign(request, alertDetails, {
    tags: createArrayFrom(alertDetails.tags),
  });
  return withoutEmptyProperties(request);
};

module.exports = {
  createAlertRequestFrom,
};
