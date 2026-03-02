import { chromium } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

(async () => {
  const browser = await chromium.launch();

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

    // Wait for initial GSAP hero animations
    await page.waitForTimeout(2000);

    // Scroll through the entire page slowly to trigger ScrollTrigger animations
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    const scrollStep = vp.height / 2;
    for (let y = 0; y < pageHeight; y += scrollStep) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(300);
    }
    // Scroll to very bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Scroll back to top for full page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Full page screenshot
    await page.screenshot({
      path: `screenshots/${vp.name}-full.png`,
      fullPage: true,
    });

    // Section screenshots
    const sections = [
      { name: 'hero', selector: 'main > section:first-of-type' },
      { name: 'about', selector: '#about' },
      { name: 'experience', selector: '#experience' },
      { name: 'projects', selector: '#projects' },
      { name: 'contact', selector: '#contact' },
    ];

    for (const section of sections) {
      try {
        const el = await page.$(section.selector);
        if (el) {
          await el.screenshot({ path: `screenshots/${vp.name}-${section.name}.png` });
        } else {
          console.log(`Selector not found: ${section.selector} on ${vp.name}`);
        }
      } catch (e) {
        console.log(`Could not screenshot ${section.name} on ${vp.name}: ${e}`);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log('Screenshots saved to ./screenshots/');
})();
