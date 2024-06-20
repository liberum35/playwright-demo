import { test } from '@playwright/test';
import { WebTablesPage } from './WebTablesPage';

test('Check form on page', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);
  await webTablesPage.navigate();
  await webTablesPage.clickAddButton();
  await webTablesPage.expectFieldsAreEmpty();
  await webTablesPage.fillForm('Name', 'LastName', 'test@youpmail.com', '30', '5000', 'QA');
  await webTablesPage.clickSubmitButton();
});