import { Page, expect } from '@playwright/test';

export class WebTablesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/webtables', { waitUntil: 'domcontentloaded' });
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

  async fillForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    await this.page.getByPlaceholder('First Name').click();
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').click();
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('name@example.com').click();
    await this.page.getByPlaceholder('name@example.com').fill(email);
    await this.page.getByPlaceholder('Age').click();
    await this.page.getByPlaceholder('Age').fill(age);
    await this.page.getByPlaceholder('Salary').click();
    await this.page.getByPlaceholder('Salary').fill(salary);
    await this.page.getByPlaceholder('Department').click();
    await this.page.getByPlaceholder('Department').fill(department);
  }

  async clickSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}
