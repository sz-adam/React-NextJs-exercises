import React from "react";
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function TodoDialog({ open, setOpen }) {
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
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter task description"
            />
          </div>

          <div>
            <label htmlFor="priority" className="block text-sm font-medium">
              Priority
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  Select Priority
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem value="low">Low</DropdownMenuItem>
                <DropdownMenuItem value="medium">Medium</DropdownMenuItem>
                <DropdownMenuItem value="high">High</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <label htmlFor="dueDate" className=" text-sm font-medium">
              Due Date
            </label>
            <input
              type="date"
              className="flex w-full justify-center border p-2 rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  Select Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem value="work">Work</DropdownMenuItem>
                <DropdownMenuItem value="personal">Personal</DropdownMenuItem>
                <DropdownMenuItem value="shopping">Shopping</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button variant="primary">Add Todo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
