const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Required for WSL + /mnt/c/
      interval: 1000,    // Check for changes every 1s
    },
  },
});
