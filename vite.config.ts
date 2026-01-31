/**
 * @file vite.config.ts
 * @description Vite 配置文件，配置插件与基础路径
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
})
