import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TodoDialog } from "./TodoDialog";
import { useTodos } from "@/context/TodoContext";

export function Category() {
    const { category } = useTodos();
  
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 w-full lg:w-1/5 flex flex-wrap lg:flex-col justify-center lg:justify-start  items-center text-center gap-2">
      <h2 className="text-2xl font-bold mb-4 hidden lg:block">Categories</h2>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 justify-center  text-center">
        {category.map((categories) => (
          <Button key={categories} variant="yellow" className="my-2 px-6 ">
            {categories}
          </Button>
        ))}
      </div>

      <Button
        variant="circle"
        className="lg:hidden fixed bottom-2 right-2 z-50 h-16 w-16"
        onClick={() => setOpen(true)}
      >
        <Plus className="h-5 w-5" />
      </Button>
      <Button className="hidden lg:block" onClick={() => setOpen(true)}>
        Add Todo
      </Button>
      <TodoDialog open={open} setOpen={setOpen} />
    </div>
  );
}
