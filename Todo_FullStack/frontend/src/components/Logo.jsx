import React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className, ...props }) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 tracking-tight",
        "hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer",
        className
      )}
      {...props}
    >
      ToDoList
    </h1>
  );
}
