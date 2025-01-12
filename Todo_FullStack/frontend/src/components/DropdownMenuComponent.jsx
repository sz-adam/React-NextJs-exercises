import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function DropdownMenuComponent({
  label,
  options,
  selectedValue,
  onSelect,
}) {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium">
        {label}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            {selectedValue || `Select ${label}`}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          {options.map((option) => (
            <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
