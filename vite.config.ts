import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { critical } from 'vite-plugin-critical'; // 1. Importamos o plugin critical

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // SUAS CONFIGURAÇÕES DE SERVIDOR (MANTIDAS)
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },

  // LISTA DE PLUGINS ATUALIZADA
  plugins: [
    react(),
    
    // Plugin que você já usava (só para desenvolvimento)
    mode === 'development' && componentTagger(),
    
    // 2. Adicionamos o plugin critical (só para produção)
    mode === 'production' && critical({
      criticalUrl: './dist/index.html',
      criticalPages: [
        { uri: 'index.html', template: 'index' },
      ]
    }),

  ].filter(Boolean), // O .filter(Boolean) continua, para remover plugins inativos
  
  // SUAS CONFIGURAÇÕES DE RESOLVE (MANTIDAS)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));