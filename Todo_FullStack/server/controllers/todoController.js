
const getTodos = async (req, res) => {
 console.log("összes todo")
};

const createTodo = async (req, res) => {
   console.log("todo létrehozása");

};

const updateTodo = async (req, res) => {
 console.log("todo módosítása");
};

const deleteTodo = async (req, res) => {
 console.log("todo törlése");
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
