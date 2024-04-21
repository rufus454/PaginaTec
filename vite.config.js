import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Src": "/src",
      "@Data": "/src/Data",
      "@Common": "/src/Data/Common",
      "@Domain": "/src/Domain",
      "@Entity": "/src/Domain/Entity",
      "@Presentation": "/src/Presentation",
      "@Components": "/src/Presentation/Components",
      "@Views": "/src/Presentation/Views",
      "@Utility": "/src/Utility",
    },
  },
});
