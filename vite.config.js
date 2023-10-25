import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: "single-vendor",
      customChunk: (args) => {
        // files into pages directory is export in single files
        let { file, id, moduleId, root } = args;
        if (file.startsWith("src/pages/")) {
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, "");
          return file;
        }
        return null;
      },
      customSplitting: {
        // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
        "react-vendor": ["react", "react-dom"],
        // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
        utils: [/src\/utils/],
      },
    }),
  ],
});
