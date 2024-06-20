import { Locator, Page, expect } from '@playwright/test';

export class WebTablesPage {
  private readonly page: Page;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly age: Locator;
  private readonly salary: Locator;
  private readonly department: Locator;
  private readonly addButton: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.email = page.getByPlaceholder('name@example.com');
    this.age = page.getByPlaceholder('Age');
    this.salary = page.getByPlaceholder('Salary');
    this.department = page.getByPlaceholder('Department');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/webtables', { waitUntil: 'domcontentloaded' });
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async expectFieldsAreEmpty() {
    await expect(this.firstName).toBeEmpty();
    await expect(this.lastName).toBeEmpty();
    await expect(this.email).toBeEmpty();
    await expect(this.age).toBeEmpty();
    await expect(this.salary).toBeEmpty();
    await expect(this.department).toBeEmpty();
  }

  async fillForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    await this.firstName.click();
    await this.firstName.fill(firstName);
    await this.lastName.click();
    await this.lastName.fill(lastName);
    await this.email.click();
    await this.email.fill(email);
    await this.age.click();
    await this.age.fill(age);
    await this.salary.click();
    await this.salary.fill(salary);
    await this.department.click();
    await this.department.fill(department);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}

