const { PRIORITIES, CATEGORIES } = require("../utils/taskEnums");

const getPriorities = async (req, res) => {
  const priorities = PRIORITIES;
  res.json(priorities);
};

const getCategories = async (req, res) => {
  const categories = CATEGORIES; 
  res.json(categories);
};

module.exports = {
  getPriorities,
  getCategories,
};
