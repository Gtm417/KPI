const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  
   // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');

  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');

  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'TestTest');

  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');

  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'Test123');

  // Click button:has-text("Log in")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Log in")');

  // Click text=Log in × >> [aria-label="Close"]
  await page.click('text=Log in × >> [aria-label="Close"]');

   // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click button:has-text("Place Order")
  await page.click('button:has-text("Place Order")');
  // Click text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.click('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
  // Fill text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.fill('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'test');
  // Click text=Total: Name: Country: City: Credit card: Month: Year:
  await page.click('text=Total: Name: Country: City: Credit card: Month: Year:');
  // Click #country
  await page.click('#country');
  // Fill #country
  await page.fill('#country', 'test');
  // Click #city
  await page.click('#city');
  // Fill #city
  await page.fill('#city', 'test');
  // Click #card
  await page.click('#card');
  // Fill #card
  await page.fill('#card', '4124125415151');
  // Click #month
  await page.click('#month');
  // Fill #month
  await page.fill('#month', '12');
  // Click #year
  await page.click('#year');
  // Fill #year
  await page.fill('#year', '2021');
  // Click text=Purchase
  await page.click('text=Purchase');
  // Click text=OK
  await page.click('text=OK');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');

});