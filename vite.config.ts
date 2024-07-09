import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import rollupReplace from '@rollup/plugin-replace'
import * as path from 'path'
import { env } from 'node:process'


// https://vitejs.dev/config/
export default defineConfig({
    base: env.NODE_ENV == 'development' ? undefined : '/zoloto55',
    plugins: [
        rollupReplace({
            preventAssignment: true,
            values: {
                __DEV__: JSON.stringify(true),
                "process.env.NODE_ENV": JSON.stringify("development"),
            },
          }),
        react(),
        svgr()
    ],
    resolve: {
        alias: [
            {
                find: '@', replacement: path.resolve(__dirname, 'src')
            },
        ],
    },
})


