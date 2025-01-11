import React, { useState } from "react";
import TodoCard from "./TodoCard";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React project",
      description: "Complete all sections of the React tutorial",
      priority: "High",
      completed: false,
      category: "Work",
      dueDate: new Date(),     
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruits",
      priority: "Medium",
      completed: false,
      category: "Shopping",
      dueDate: new Date(),
     
    },
    {
      id: 3,
      title: "Exercise at the gym",
      description: "Full body workout",
      priority: "Low",
      completed: true,
      category: "Fitness",
      dueDate: new Date(),
     
    },
    {
      id: 4,
      title: "Finish React project",
      description: "Complete all sections of the React tutorial",
      priority: "High",
      completed: false,
      category: "Work",
      dueDate: new Date(),
     
    },
    {
      id: 5,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruits",
      priority: "Medium",
      completed: false,
      category: "Shopping",
      dueDate: new Date(),
     
    },
    {
      id: 6,
      title: "Exercise at the gym",
      description: "Full body workout",
      priority: "Low",
      completed: true,
      category: "Fitness",
      dueDate: new Date(),
     
    },
    {
      id: 7,
      title: "Exercise at the gym",
      description: "Full body workout",
      priority: "Low",
      completed: true,
      category: "Fitness",
      dueDate: new Date(),
     
    },
  ]);

  return (
    <div className="lg:order-1 w-full lg:w-3/5  p-4 mx-auto  rounded-lg shadow-lg">
      {/* Todo lista */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
