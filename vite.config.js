import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import WindiCSS from 'vite-plugin-windicss'


import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons'

import postcssNesting from 'postcss-nesting';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    PurgeIcons({
      /* PurgeIcons Options */
    }),
    Components({
      resolvers: [IconsResolver()],
      // relative paths to the directory to search for components.
      // dirs: ['src/components', '../../commons/brixui-vue3/scr/components'],
    }),
    Icons({
      scale: 1.8, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: 'ms-Icon', // Class names apply to icons
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  }
})
