import { priorityColors } from "../utils/constants";
import TodoCard from "./TodoCard";
import { useTodos } from "@/context/TodoContext";

function Todo() {
  const { todos } = useTodos();

  return (
    <div className="lg:order-1 w-full lg:w-3/5 p-4 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...todos].reverse().map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            priorityBorder={priorityColors[todo.priority]}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
