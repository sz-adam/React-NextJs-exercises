const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

jest.mock("@prisma/client", () => {
  const mockFindMany = jest.fn().mockResolvedValue([
    {
      id: 1,
      title: "Mock Todo 1",
      description: "Description 1",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Mock Todo 2",
      description: "Description 2",
      priority: "Low",
      completed: true,
    },
  ]);

  const mockCreate = jest.fn().mockResolvedValue({
    id: 3,
    title: "New Todo",
    description: "New Description",
    priority: "Medium",
    completed: false,
  });

  const mockUpdate = jest.fn().mockResolvedValue({
    id: 1,
    title: "Updated Todo",
    description: "Updated Description",
    priority: "High",
    completed: true,
  });

  const mockDelete = jest.fn().mockResolvedValue({
    id: 1,
    title: "Mock Todo 1",
    description: "Description 1",
    priority: "High",
    completed: false,
  });

  return {
    PrismaClient: jest.fn(() => ({
      todo: {
        findMany: mockFindMany,
        create: mockCreate,
        update: mockUpdate,
        delete: mockDelete,
      },
      $disconnect: jest.fn(),
    })),
  };
});

const app = express();
app.use(express.json());

const router = express.Router();
router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

app.use(router);

module.exports = app;
