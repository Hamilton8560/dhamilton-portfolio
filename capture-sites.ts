import { chromium } from '@playwright/test';

const sites = [
  { name: 'americaniron', url: 'https://americaniron.online' },
  { name: 'fitforhim', url: 'https://fitforhim.com' },
  { name: 'angeltrust', url: 'https://angel-trust.netlify.app' },
  { name: 'musclemap', url: 'https://musclemap.net' },
  { name: 'southernstrength', url: 'https://southernstrengthgym.com' },
];

(async () => {
  const browser = await chromium.launch();

  for (const site of sites) {
    try {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
      });
      const page = await context.newPage();
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);

      await page.screenshot({
        path: `public/images/${site.name}-full.png`,
        fullPage: true,
      });

      await page.screenshot({
        path: `public/images/${site.name}-preview.png`,
        fullPage: false,
      });

      console.log(`✓ Captured ${site.name}`);
      await context.close();
    } catch (e) {
      console.log(`✗ Failed to capture ${site.name}: ${e}`);
    }
  }

  await browser.close();

  console.log('Converting to JPEG...');
  const { execSync } = require('child_process');
  for (const site of sites) {
    try {
      execSync(`sips -s format jpeg -s formatOptions 75 public/images/${site.name}-full.png --out public/images/${site.name}-full.jpg`, { stdio: 'pipe' });
      console.log(`✓ Converted ${site.name}`);
    } catch (e) {
      console.log(`✗ Failed to convert ${site.name}`);
    }
  }

  console.log('Done!');
})();
