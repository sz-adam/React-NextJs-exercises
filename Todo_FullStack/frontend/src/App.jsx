import { ThemeProvider } from "./context/themeContext";

import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}

export default App;
