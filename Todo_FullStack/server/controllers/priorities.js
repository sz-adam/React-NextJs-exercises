const PRIORITIES = require("../utils/priorityEnum");

const getPriorities = async (req, res) => {
  const priorities = PRIORITIES;
  res.json(priorities);
};

module.exports = {
  getPriorities,
};
