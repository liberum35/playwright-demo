import { test, expect } from '@playwright/test';
import { WebTablesPage } from './WebTablesPage';

test('Form filling and next button checking', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);
  await webTablesPage.navigate();

  for (let i = 0; i < 11; i++) {
    await webTablesPage.clickAddButton();
    await webTablesPage.expectFieldsAreEmpty();
    await webTablesPage.fillForm(
      `TestName${i}`,
      `Testname2${i}`,
      `testform${i}@yopmail.com`,
      `${i}`,
      `${1000 + i}`,
      `QA${i}`
    );
    await webTablesPage.clickSubmitButton();
  }
  await expect(page.getByRole('button', { name: 'Next' })).toBeEnabled();
  await page.getByRole('button', { name: 'Next' }).click();
  expect(await page.locator('.ReactTable').innerHTML()).toMatchSnapshot();
});
