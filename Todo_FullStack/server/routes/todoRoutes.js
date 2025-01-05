const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { getPriorities } = require("../controllers/priorities");

// Route-ok
router.get("/", getTodos); 
router.post("/", createTodo); 
router.put("/:id", updateTodo); 
router.delete("/:id", deleteTodo); 
router.get("/priorities",getPriorities);

module.exports = router;
