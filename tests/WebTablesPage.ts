import { expect, Page, Locator } from '@playwright/test';

export class WebTablesPage {
  readonly page: Page;
  readonly addButtonLocator: Locator;
  readonly submitButtonLocator: Locator;
  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly emailInputLocator: Locator;
  readonly ageInputLocator: Locator;
  readonly salaryInputLocator: Locator;
  readonly departmentInputLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButtonLocator = page.getByRole('button', { name: 'Add' });
    this.submitButtonLocator = page.getByRole('button', { name: 'Submit' });
    this.firstNameInputLocator = page.getByPlaceholder('First Name');
    this.lastNameInputLocator = page.getByPlaceholder('Last Name');
    this.emailInputLocator = page.getByPlaceholder('name@example.com');
    this.ageInputLocator = page.getByPlaceholder('Age');
    this.salaryInputLocator = page.getByPlaceholder('Salary');
    this.departmentInputLocator = page.getByPlaceholder('Department');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/webtables');
  }

  async clickAddButton() {
    await this.addButtonLocator.click();
  }

  async expectFieldsAreEmpty() {
    await Promise.all([
      expect(this.firstNameInputLocator).toBeEmpty(),
      expect(this.lastNameInputLocator).toBeEmpty(),
      expect(this.emailInputLocator).toBeEmpty(),
      expect(this.emailInputLocator).toBeEmpty(),
      expect(this.ageInputLocator).toBeEmpty(),
      expect(this.salaryInputLocator).toBeEmpty(),
      expect(this.departmentInputLocator).toBeEmpty(),
    ]);
  }

  async fillForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    await this.firstNameInputLocator.click();
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.click();
    await this.lastNameInputLocator.fill(lastName);
    await this.emailInputLocator.click();
    await this.emailInputLocator.fill(email);
    await this.ageInputLocator.click();
    await this.ageInputLocator.fill(age);
    await this.salaryInputLocator.click();
    await this.salaryInputLocator.fill(salary);
    await this.departmentInputLocator.click();
    await this.departmentInputLocator.fill(department);
  }

  async clickSubmitButton() {
    await this.submitButtonLocator.click();
  }
}