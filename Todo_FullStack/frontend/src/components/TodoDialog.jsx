import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTodos } from "@/context/TodoContext";
import { InputField } from "./InputField";
import { DropdownMenuComponent } from "./DropdownMenuComponent";

export function TodoDialog({ open, setOpen }) {
  const { addTodo, category, priority } = useTodos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTodo = () => {
    if (!title || !selectedPriority || !dueDate || !selectedCategory) {
      alert("Please fill in all required fields!");
      return;
    }
    const isoDueDate = `${dueDate}T00:00:00Z`;

    addTodo(title, description, selectedPriority, selectedCategory, isoDueDate);

    setTitle("");
    setDescription("");
    setSelectedPriority("");
    setSelectedCategory("");
    setDueDate("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="circle"
          className="lg:hidden fixed bottom-2 right-2 z-50 h-16 w-16 "
        >
          <Plus className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Add a New Todo
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center">
          Fill out the details below to add a new task to your list.
        </DialogDescription>
        <div className="space-y-4">
          <InputField
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />

          <InputField
            id="description"
            label="Description"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          />

          <DropdownMenuComponent
            label="Priority"
            options={priority}
            selectedValue={selectedPriority}
            onSelect={setSelectedPriority}
          />

          <InputField
            id="dueDate"
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <DropdownMenuComponent
            label="Category"
            options={category}
            selectedValue={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
