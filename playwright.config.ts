import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',
    timeout: 60 * 1000,
    retries: 1,
    reporter: [['html', { outputFolder: 'reports\\playwright-html-report', open: 'always' }],['allure-Playwright',{outputFolder: 'reports\\Allure-results',open:'always'}]]
    
    ,

    fullyParallel: true,

    use: {
        baseURL: 'https://www.saucedemo.com/',
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