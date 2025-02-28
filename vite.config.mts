import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [zaloMiniApp(), react(), tsconfigPaths()],
    // server: {
    //   proxy: {
    //     "/api": {
    //       target: "",
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    // },
    
  });
};
