import { test, expect } from '@playwright/test';

// Это тест для страницы https://demoqa.com/webtables
const testData = {
  firstName: 'Name',
  lastName: 'LastName',
  email: 'test@youpmail.com',
  age: '30',
  salary: '5000',
  department: 'QA',
};

class WebTablesPage {
  constructor(private readonly page: Page) {}

  async navigate() {
    await this.page.goto('https://demoqa.com/webtables');
  }

  async clickAddButton() {
    await this.page.getByRole('button', { name: 'Add' }).click();
  }

  async expectFieldsAreEmpty() {
    await expect(this.page.getByPlaceholder('First Name')).toBeEmpty();
    await expect(this.page.getByPlaceholder('Last Name')).toBeEmpty();
    await expect(this.page.getByPlaceholder('name@example.com')).toBeEmpty();
    await expect(this.page.getByPlaceholder('Age')).toBeEmpty();
    await expect(this.page.getByPlaceholder('Salary')).toBeEmpty();
    await expect(this.page.getByPlaceholder('Department')).toBeEmpty();
  }

  async fillForm() {
    for (const [placeholder, value] of Object.entries(testData)) {
      const input = this.page.getByPlaceholder(placeholder as keyof typeof testData);
      await input.click();
      await input.fill(value);
    }
  }

  async clickSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async expectDataVisible() {
    for (const [value] of Object.values(testData)) {
      await expect(this.page.getByRole('gridcell', { name: value })).toBeVisible();
    }
  }
}

test('test', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);

  await webTablesPage.navigate();
  await webTablesPage.clickAddButton();
  await webTablesPage.expectFieldsAreEmpty();
  await webTablesPage.fillForm();
  await webTablesPage.clickSubmitButton();
  await webTablesPage.expectDataVisible();
});
