// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://olekrial.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  output: 'static',
})
