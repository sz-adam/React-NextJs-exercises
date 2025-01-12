import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCheck, RotateCcw, Trash2 } from "lucide-react";
import { useTodos } from "../context/todoContext";

function TodoCard({ todo }) {
  const { deleteTodo, completeTodo } = useTodos();
  const cardOpacityClass = todo.completed ? "opacity-50" : "opacity-100";

  return (
    <Card className={`w-full shadow-md ${cardOpacityClass}`}>
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
          <RotateCcw color="#225e8c" cursor="pointer" />
          <Trash2
            color="#e42121"
            cursor="pointer"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
    </Card>
  );
}

export default TodoCard;
