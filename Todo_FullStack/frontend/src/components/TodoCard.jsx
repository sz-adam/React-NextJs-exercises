import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCheck, RotateCcw, Trash2 } from "lucide-react";

function TodoCard({ todo }) {
  return (
    <Card className={`w-full shadow-md`}>
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
            <strong>Status:</strong>{" "}
            {todo.completed ? "Completed" : ""}
          </p>
        </div>
      </CardContent>
      <div className="flex justify-between items-center p-4 border-t">
        <CheckCheck color="#0fd212" cursor="pointer" />
        <div className="flex space-x-6">
          <RotateCcw color="#225e8c" cursor="pointer" />
          <Trash2 color="#e42121" cursor="pointer" />
        </div>
      </div>
    </Card>
  );
}

export default TodoCard;
