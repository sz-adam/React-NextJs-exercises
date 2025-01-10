const request = require("supertest");
const app = require("./testSetup");

const mockTodos = [
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
];

const newTodo = {
  title: "New Todo",
  description: "New Description",
  priority: "Medium",
  category: "Travel",
  dueDate: "2025-01-15T18:00:00Z",
};

const updatedTodo = {
  title: "Updated Todo",
  description: "Updated Description",
  priority: "High",
  category: "Travel",
  dueDate: "2025-01-15T18:00:00Z",
};
const completeTodo = {
  
  title: "Mock Todo 1",
  description: "Description 1",
  priority: "High",
  completed: true,
  category: "Travel",
  dueDate: "2025-01-15T18:00:00Z",
};

describe("Todo Controller Tests", () => {
  const checkResponse = (response, status, body) => {
    expect(response.status).toBe(status);
    expect(response.body).toEqual(body);
  };

  describe("GET /todos", () => {
    it("should return a list of todos", async () => {
      const response = await request(app).get("/todos");
      checkResponse(response, 200, mockTodos);
    });
  });

  describe("POST /todos", () => {
    it("should create a new todo", async () => {
      const response = await request(app).post("/todos").send(newTodo);
      checkResponse(response, 201, { id: 3, ...newTodo, completed: false });
    });
  });

  describe("PUT /todos/:id", () => {
    it("should update an existing todo", async () => {
      const response = await request(app).put("/todos/1").send(updatedTodo);
      checkResponse(response, 200, { id: 1, ...updatedTodo });
    });
  });
 describe("PUT /todos/complete/:id", () => {
   it("should update a completed todo", async () => {
     const response = await request(app)
       .put("/todos/complete/1")
       .send(completeTodo);
     checkResponse(response, 200, {
       id: 1,
       completed: true,
     });
   });
 });

  describe("DELETE /todos/:id", () => {
    it("should delete a todo and return the deleted object", async () => {
      const response = await request(app).delete("/todos/1");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Todo deleted successfully",
        deletedTodo: mockTodos[0],
      });
    });
  });
});
