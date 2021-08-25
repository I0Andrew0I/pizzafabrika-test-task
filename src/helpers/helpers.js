exports.getMaxId = (array) =>
  array.reduce((maxId, { id }) => (maxId > id ? maxId : id), 0);
