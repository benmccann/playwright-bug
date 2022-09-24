import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('+server.js next to +page.svelte works 1', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 2', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 3', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 4', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 5', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 6', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 7', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 8', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 9', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 10', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 11', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 12', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 13', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 14', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 15', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 16', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 17', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 18', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 19', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});

test('+server.js next to +page.svelte works 20', async ({ page }) => {
	await page.goto('/endpoint-next-to-page');
	expect(await page.textContent('p')).toBe('Hi');

	for (const method of ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']) {
		await page.click(`button:has-text("${method}")`);
		await expect(page.locator('pre')).toHaveText(method);
	}
});
