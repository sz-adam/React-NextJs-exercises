import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

const TODOAPI = "http://localhost:9000/todos";
const CATEGORYAPI = "http://localhost:9000/todos/categories";
const PRIORITYAPI = "http://localhost:9000/todos/priorities";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState([]);
  const [priority, setPriority] = useState([]);


  // Összes Todo lekérése
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(TODOAPI);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // CRUD műveletek
  const addTodo = async (title, description, priority, category, dueDate) => {
    try {
      const response = await axios.post(TODOAPI, {
        title,
        description,
        priority,
        category,
        dueDate,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, updatedTitle) => {};

  const deleteTodo = async (id) => {};

  const completeTodo = async (id) => {};

  //prioritások lekérése
  useEffect(() => {
    const fetchPriority = async () => {
      try {
        const response = await axios.get(PRIORITYAPI);
        setPriority(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchPriority();
  }, []);
  //kategoriák lekérése
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(CATEGORYAPI);
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchCategory();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo, category, priority }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// 4. Hook a könnyebb használatért
export const useTodos = () => useContext(TodoContext);
