import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCheck, RotateCcw, Trash2 } from "lucide-react";
import { useTodos } from "../context/todoContext";
import { TodoDialog } from "./TodoDialog";
import { useState } from "react";

function TodoCard({ todo, priorityBorder }) {
  const { deleteTodo, completeTodo } = useTodos();
  const cardOpacityClass = todo.completed ? "opacity-30" : "opacity-100";
  const [open, setOpen] = useState(false);

  return (
    <Card
      className={`w-full shadow-md ${cardOpacityClass} border-t-4 ${priorityBorder}`}
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          {todo.title}
        </CardTitle>
        <CardDescription className="text-sm text-center h-10 overflow-y-auto">
          {todo.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-center">
          <p>
            <strong>Priority:</strong> {todo.priority}
          </p>
          <p>
            <strong>Category:</strong> {todo.category}
          </p>
          {todo.dueDate && (
            <p>
              <strong>Due Date:</strong>{" "}
              {new Date(todo.dueDate).toLocaleDateString()}
            </p>
          )}
          <p>
            <strong>Status:</strong> {todo.completed ? "Completed" : ""}
          </p>
        </div>
      </CardContent>
      <div className="flex justify-between items-center p-4 border-t">
        <CheckCheck
          color="#0fd212"
          cursor="pointer"
          onClick={() => completeTodo(todo.id)}
        />
        <div className="flex space-x-6">
          {todo.completed ? (
            ""
          ) : (
            <RotateCcw
              color="#225e8c"
              cursor="pointer"
              onClick={() => setOpen(true)}
            />
          )}
          <Trash2
            color="#e42121"
            cursor="pointer"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
      <TodoDialog open={open} setOpen={setOpen} todo={todo} />
    </Card>
  );
}

export default TodoCard;
