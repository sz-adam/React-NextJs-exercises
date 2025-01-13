const { PrismaClient } = require("@prisma/client");
const handleError = require("./handleError");

const prisma = new PrismaClient();

const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    handleError(res, error, "Error fetching todos");
  } finally {
    await prisma.$disconnect();
  }
};

const createTodo = async (req, res) => {
  const { title, description, priority, category, dueDate } = req.body;
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        priority,
        category,
        dueDate,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    handleError(res, error, "Error creating TODO");
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, dueDate } = req.body;

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        priority,
        dueDate,
      },
    });

    res.status(200).json(updatedTodo);
  } catch (error) {
    handleError(res, error, "Error updating todo");
  } finally {
    await prisma.$disconnect();
  }
};

const completeTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        completed,
      },
    });

    res.status(200).json(updatedTodo);
  } catch (error) {
    handleError(res, error, "Error updating todo");
  } finally {
    await prisma.$disconnect();
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Todo deleted successfully", deletedTodo });
  } catch (error) {
    handleError(res, error, "Error deleting todo");
  } finally {
    await prisma.$disconnect();
  }
};

const getTodosByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const todos = await prisma.todo.findMany({
      where: { category },
    });

    res.status(200).json(todos);
  } catch (error) {
    handleError(res, error, "Error fetching todos by category");
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  getTodosByCategory,
};
