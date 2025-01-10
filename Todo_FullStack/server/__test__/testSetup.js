const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
} = require("../controllers/todoController");

jest.mock("@prisma/client", () => {
  const mockFindMany = jest.fn().mockResolvedValue([
    {
      id: 1,
      title: "Mock Todo 1",
      description: "Description 1",
      priority: "High",
      completed: false,
      category: "Travel",
      dueDate: "2025-01-15T18:00:00Z",
    },
    {
      id: 2,
      title: "Mock Todo 2",
      description: "Description 2",
      priority: "Low",
      completed: true,
      category: "Travel",
      dueDate: "2025-01-15T18:00:00Z",
    },
  ]);

  const mockCreate = jest.fn().mockResolvedValue({
    id: 3,
    title: "New Todo",
    description: "New Description",
    priority: "Medium",
    completed: false,
    category: "Travel",
    dueDate: "2025-01-15T18:00:00Z",
  });

  const mockUpdate = jest.fn().mockResolvedValue({
    id: 1,
    title: "Updated Todo",
    description: "Updated Description",
    priority: "High",   
    category: "Travel",
    dueDate: "2025-01-15T18:00:00Z",
  });
  const completeTodo = jest.fn().mockResolvedValue({
    id: 1,
    title: "Mock Todo 1",
    description: "Description 1",
    priority: "High",
    completed:true,
    category: "Travel",
    dueDate: "2025-01-15T18:00:00Z",
  });

  const mockDelete = jest.fn().mockResolvedValue({
    id: 1,
    title: "Mock Todo 1",
    description: "Description 1",
    priority: "High",
    completed: false,
    category: "Travel",
    dueDate: "2025-01-15T18:00:00Z",
  });

  return {
    PrismaClient: jest.fn(() => ({
      todo: {
        findMany: mockFindMany,
        create: mockCreate,
        update: mockUpdate,
        delete: mockDelete,
        complete: completeTodo,
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
router.put("/todos/complete/:id", completeTodo);
router.delete("/todos/:id", deleteTodo);

app.use(router);

module.exports = app;
