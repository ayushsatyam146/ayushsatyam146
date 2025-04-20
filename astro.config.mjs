import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://ayushsatyam146.github.io/ayushsatyam146',  // <- include the repo name here!
  base: '/ayushsatyam146',  
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