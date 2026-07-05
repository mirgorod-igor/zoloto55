// vite.config.ts
import { defineConfig } from "file:///D:/zoloto55/node_modules/vite/dist/node/index.js";
import react from "file:///D:/zoloto55/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/zoloto55/node_modules/vite-plugin-svgr/dist/index.js";
import rollupReplace from "file:///D:/zoloto55/node_modules/@rollup/plugin-replace/dist/es/index.js";
import * as path from "path";
import { env } from "node:process";
var __vite_injected_original_dirname = "D:\\zoloto55";
console.log(env.NODE_ENV);
var vite_config_default = defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development")
      }
    }),
    react(),
    svgr()
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__vite_injected_original_dirname, "src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6b2xvdG81NVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcem9sb3RvNTVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3pvbG90bzU1L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xyXG5pbXBvcnQgcm9sbHVwUmVwbGFjZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1yZXBsYWNlJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ25vZGU6cHJvY2VzcydcclxuXHJcblxyXG5jb25zb2xlLmxvZyhlbnYuTk9ERV9FTlYpXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHJvbGx1cFJlcGxhY2Uoe1xyXG4gICAgICAgICAgICBwcmV2ZW50QXNzaWdubWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgICAgICAgICBfX0RFVl9fOiBKU09OLnN0cmluZ2lmeSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIFwicHJvY2Vzcy5lbnYuTk9ERV9FTlZcIjogSlNPTi5zdHJpbmdpZnkoXCJkZXZlbG9wbWVudFwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIHJlYWN0KCksXHJcbiAgICAgICAgc3ZncigpXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdU4sU0FBUyxvQkFBb0I7QUFDcFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixZQUFZLFVBQVU7QUFDdEIsU0FBUyxXQUFXO0FBTHBCLElBQU0sbUNBQW1DO0FBUXpDLFFBQVEsSUFBSSxJQUFJLFFBQVE7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsY0FBYztBQUFBLE1BQ1YsbUJBQW1CO0FBQUEsTUFDbkIsUUFBUTtBQUFBLFFBQ0osU0FBUyxLQUFLLFVBQVUsSUFBSTtBQUFBLFFBQzVCLHdCQUF3QixLQUFLLFVBQVUsYUFBYTtBQUFBLE1BQ3hEO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0g7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3pEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
