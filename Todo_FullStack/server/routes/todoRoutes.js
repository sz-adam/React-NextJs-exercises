const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
} = require("../controllers/todoController");
const {
  getPriorities,
  getCategories,
} = require("../controllers/tasksEnumController");

// Route-ok
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.put("/complete/:id", completeTodo);
router.delete("/:id", deleteTodo);
router.get("/priorities", getPriorities);
router.get("/categories", getCategories);

module.exports = router;
