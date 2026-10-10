# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## add tailwind to existing react project
1. open terminal and goto project frontend folder 
2. install tailwind by 
` npm install tailwind @tailwindcss/vite`
3. open vite.config.js
4. add `import tailwindcss from "@tailwindcss/vite";`
in first line
5. add 'tailwind()' after react()
6. the file should look like
```
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()]
});
```
7. open src/index.css and remove all contents, then add below line
`@import "tailwindcss";`