import { devices } from '@playwright/test';

const known_devices = {
	chromium: devices['Desktop Chrome'],
	firefox: devices['Desktop Firefox'],
	webkit: devices['Desktop Safari']
};
const test_browser = /** @type {keyof typeof known_devices} */ (
	process.env.KIT_E2E_BROWSER ?? 'chromium'
);

const test_browser_device = known_devices[test_browser];

if (!test_browser_device) {
	throw new Error(
		`invalid test browser specified: KIT_E2E_BROWSER=${
			process.env.KIT_E2E_BROWSER
		}. Allowed values: ${Object.keys(known_devices).join(', ')}`
	);
}

export default {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	use: {
		...test_browser_device,
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure'
	},
	workers: 50
}
