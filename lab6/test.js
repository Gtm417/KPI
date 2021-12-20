const { test, expect } = require('@playwright/test');

class Login {
	constructor(page) {
		this.page = page;
	}
	
	async goto() {
		await this.page.goto('https://www.demoblaze.com/');
	}
	
	async fillData () {
		await this.page.click('a:has-text("Log in")');
	// Click text=Log in × Username: Password: Close Log in >> input[type="text"]
		await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
		await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'test');
  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
		await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
		await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'test');
	}
	
	async expect() {
		 await Promise.all([
		this.page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/' }*/),
		this.page.click('button:has-text("Log in")')
		]);
  
		// Click text=Welcome test
		await this.page.click('text=Welcome test');
		await expect(this.page).toHaveURL('https://www.demoblaze.com/#');
	}
	
}

class PurchaseOrder {
	constructor(page) {
		this.page = page;
	}
	
	async navigateToCart() {
		// Click text=Cart
		await this.page.click('text=Cart');
		await expect(this.page).toHaveURL('https://www.demoblaze.com/cart.html');
	}
	
	async fillData() {
		  // Click button:has-text("Place Order")
		await this.page.click('button:has-text("Place Order")');
		// Click text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
		await this.page.click('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
		// Fill text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
		await this.page.fill('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'test');
		// Click text=Total: Name: Country: City: Credit card: Month: Year:
		await this.page.click('text=Total: Name: Country: City: Credit card: Month: Year:');
		// Click #country
		await this.page.click('#country');
		// Fill #country
		await this.page.fill('#country', 'test');
		// Click #city
		await this.page.click('#city');
		// Fill #city
		await this.page.fill('#city', 'test');
		// Click #card
		await this.page.click('#card');
		// Fill #card
		await this.page.fill('#card', '4124125415151');
		// Click #month
		await this.page.click('#month');
		// Fill #month
		await this.page.fill('#month', '12');
		// Click #year
		await this.page.click('#year');
		// Fill #year
		await this.page.fill('#year', '2021');
		// Click text=Purchase
		await this.page.click('text=Purchase');
	}
	
	async expect(){
		// Click text=OK
		await this.page.click('text=OK');
		await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
	}
}
test('test', async ({ page }) => {
	const login = new Login(page);
	await login.goto();
	await login.fillData();
	await login.expect();

	const purchaseOrder = new PurchaseOrder(page);
	await purchaseOrder.navigateToCart();
	await purchaseOrder.fillData();
	//failed by task
	await purchaseOrder.expect();
});