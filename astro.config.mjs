// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.linusekberg.com',
  // Keep the old Wix URLs exactly: /contact, /yarn, ... (no trailing slash).
  // GitHub Pages serves contact.html at /contact.
  trailingSlash: 'never',
  build: { format: 'file' },
});
