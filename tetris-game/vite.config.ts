import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/React-NextJs-exercises/tetris-game/",
  plugins: [react()],
});
