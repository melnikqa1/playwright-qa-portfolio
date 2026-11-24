import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4173';

export default defineConfig({
  reporter: [['list'], ['html', { open: 'never' }]],
  testDir: './tests',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: devices['Desktop Chrome'] }],
  webServer: { command: 'node demo.mjs', url: baseURL },
});
