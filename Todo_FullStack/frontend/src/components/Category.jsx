import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Példa kategóriák
const categories = [
  { id: 1, name: "Work" },
  { id: 2, name: "Personal" },
  { id: 3, name: "Shopping" },
  { id: 4, name: "Fitness" },
  { id: 5, name: "Hobbies" },
  { id: 6, name: "Learning" },
];

export function Category() {
  return (
    <div className="p-4 w-full lg:w-1/5 flex flex-wrap lg:flex-col justify-center lg:justify-start  items-center text-center gap-2">
      <h2 className="text-2xl font-bold mb-4 hidden lg:block">Categories</h2>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 justify-center  text-center">
        {categories.map((category) => (
          <Button key={category.id} variant="yellow" className="my-2 px-6 ">
            {category.name}
          </Button>
        ))}
      </div>

      <Button
        variant="circle"
        className="lg:hidden fixed bottom-2 right-2 z-50 h-16 w-16"
      >
        <Plus className="h-5 w-5" />
      </Button>
      <Button className="hidden lg:block">Add Todo</Button>
    </div>
  );
}
