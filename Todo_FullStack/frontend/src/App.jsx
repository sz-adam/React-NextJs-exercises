import { ThemeProvider } from "./context/themeContext";

import Header from "./components/Header";
import { Category } from "./components/Category";
import Todo from "./components/Todo";
import CalendarTodo from "./components/CalendarTodo";
import { TodoProvider } from "./context/todoContext";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TodoProvider>
        <Header />
        <div className="flex flex-col lg:flex-row gap-4">
          <Category />
          <CalendarTodo />
          <Todo />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
