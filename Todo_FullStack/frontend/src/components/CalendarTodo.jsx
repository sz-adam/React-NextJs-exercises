import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";


function CalendarTodo() {
  const [date, setDate] = useState((undefined > new Date()));
  return (
    <div className="lg:order-2 w-full lg:w-1/4 flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md w-full flex justify-center text-3xl "
      />
    </div>
  );
}

export default CalendarTodo;
