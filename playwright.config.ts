import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',
    timeout: 60 * 1000,
    retries: 1,

    reporter: [
        ['html', { outputFolder: './reports/html', open: 'never' }]
    ],

    fullyParallel: true,

    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on',
        trace: 'on',
        screenshot: 'only-on-failure',
    }, // <-- Missing comma was here

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]

});