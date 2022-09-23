import { expect, test } from '@playwright/test';

test('+server.js next to +page.svelte works', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});
