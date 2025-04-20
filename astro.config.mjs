import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://ayushsatyam146.github.io',
  base: '/',  
  integrations: [
    tailwind(),
    alpinejs()
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  }
});